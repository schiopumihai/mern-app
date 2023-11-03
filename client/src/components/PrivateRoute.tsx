import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { NavBar } from './NavBar';
import classNames from '@/utils/classNames';

const styles = {
  content: classNames('pt-[18px]'),
};

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

  return (
    <div>
      {localStorage.getItem('accessToken') && <NavBar />}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
