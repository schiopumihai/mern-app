import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const PrivateRoute: React.FC = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.username) {
      navigate('/signIn', { replace: true });
    }
  }, [auth?.username, navigate]);

  return <Outlet />;
};
