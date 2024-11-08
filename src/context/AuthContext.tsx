// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se o token existe nos cookies para definir o estado de autenticação inicial
    const token = Cookies.get('ce_token');
    setIsAuthenticated(!!token);
  }, []);

  const login = () => {
    // Define um token de autenticação fictício no cookie
    Cookies.set('ce_token', 'dummy_token', { expires: 7 }); // O token expira em 7 dias
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove o token do cookie ao fazer logout
    Cookies.remove('ce_token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
