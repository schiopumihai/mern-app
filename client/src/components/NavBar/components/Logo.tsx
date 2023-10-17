import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = {
  log: classNames('font-pacifico', 'text-[24px]'),
  text: classNames('text-primary'),
};

// test

export const Logo = (): React.ReactNode => {
  return (
    <Link className={styles.log} to="/">
      Chat
      <span className={styles.text}>IN</span>
    </Link>
  );
};
