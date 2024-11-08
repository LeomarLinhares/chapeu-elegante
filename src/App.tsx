// src/App.tsx ou src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/auth/Login';
import ProtectedRoute from '@/components/ProtectedRoute';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AuthenticatedLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
