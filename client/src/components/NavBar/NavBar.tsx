import React from 'react';
import classNames from 'classnames';
import { Logo } from './components/Logo';

const styles = {
  container: classNames('flex', 'py-[24px]', 'px-[140px]', 'bg-white'),
};

export const NavBar = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};
