import React, { type ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: string;
  onClick?: any;
  disabled?: boolean;
  className?: string;
}

const styles = {
  container: classNames(
    'bg-primary',
    'rounded-[8px]',
    'text-white',
    'py-[12px]',
    'px-[24px]',
  ),
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
}: ButtonProps): ReactNode => {
  const buttonStyles = classNames([styles.container, className]);
  return (
    <button onClick={onClick} disabled={disabled} className={buttonStyles}>
      {children}
    </button>
  );
};
