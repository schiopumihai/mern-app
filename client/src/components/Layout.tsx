import React, { type ReactNode } from 'react';
import classNames from 'classnames';

const styles = {
  container: classNames('pt-[18px]', 'mx-auto', 'h-[100%]'),
};

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
