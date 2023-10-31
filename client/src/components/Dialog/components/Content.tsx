import React, { type ReactNode } from 'react';
import classNames from '@/utils/classNames';

interface ContentProps {
  children?: ReactNode;
  className?: string;
}

export const Content = ({ children, className }: ContentProps): ReactNode => {
  const styles = classNames('flex flex-col gap-[20px]', className);
  return <div className={styles}>{children}</div>;
};
