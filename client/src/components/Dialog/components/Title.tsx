import React, { type ReactNode } from 'react';
import classNames from '@/utils/classNames';

interface TitleProps {
  children?: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps): ReactNode => {
  const styles = classNames('font-bold', 'text-[22px]', 'mb-[30px]', className);
  return <div className={styles}>{children}</div>;
};
