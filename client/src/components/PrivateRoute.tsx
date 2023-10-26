import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectToken } from '@/features/user/userSlice';
import { useSelector } from 'react-redux';

export const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(selectToken);

  useEffect(() => {
    if (!accessToken) {
      navigate('/signIn', { replace: true });
    }
  }, [accessToken, navigate]);

  return <Outlet />;
};
