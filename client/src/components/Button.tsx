import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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
  className,
  ...buttonProps
}: ButtonProps): ReactNode => {
  const buttonStyles = classNames([styles.container, className]);
  return (
    <button {...buttonProps} className={buttonStyles}>
      {children}
    </button>
  );
};
