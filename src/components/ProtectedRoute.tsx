// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  // Função para verificar se o cookie `ce_token` existe
  const checkAuth = (): boolean => {
    return document.cookie.split('; ').some((cookie) => cookie.startsWith('ce_token='));
  };

  const isAuthenticated = checkAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
