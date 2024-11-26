// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se o token existe nos cookies para definir o estado de autenticação inicial
    const token = Cookies.get('access_token');
    setIsAuthenticated(!!token);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // Faz uma requisição ao backend para autenticar o usuário
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      
      // Salva os tokens nos cookies
      Cookies.set('access_token', data.access, { expires: 1 }); // Expira em 1 dia
      Cookies.set('refresh_token', data.refresh, { expires: 7 }); // Expira em 7 dias
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    // Remove os tokens dos cookies ao fazer logout
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    setIsAuthenticated(false);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = Cookies.get('refresh_token');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      // Faz uma requisição ao backend para renovar o access token
      const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) throw new Error('Failed to refresh token');

      const data = await response.json();
      // Atualiza o access token no cookie
      Cookies.set('access_token', data.access, { expires: 1 }); // Expira em 1 dia
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error refreshing token:', error);
      logout(); // Desloga o usuário se não for possível renovar o token
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
