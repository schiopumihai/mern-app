import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const location = useLocation();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signIn', {
        replace: true,
        state: { from: location.pathname },
      });
    }
  }, [accessToken, location, navigate]);

  return <Outlet />;
};
