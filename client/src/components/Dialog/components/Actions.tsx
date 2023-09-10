import React, { type ReactNode } from 'react';
import classNames from 'classnames';

interface ActionsProps {
  children?: ReactNode;
  className?: string;
}

export const Actions = ({ children, className }: ActionsProps): ReactNode => {
  const styles = classNames('mt-[20px] flex gap-[15px]', className);
  return <div className={styles}>{children}</div>;
};
