import React from 'react';
import classNames from '@/utils/classNames';
import { NavLink } from 'react-router-dom';

const styles = {
  log: classNames('font-pacifico', 'text-[24px]'),
  text: classNames('text-primary'),
};

export const Logo = (): React.ReactNode => {
  return (
    <NavLink className={styles.log} to="/feed">
      Mern
      <span className={styles.text}>APP</span>
    </NavLink>
  );
};
