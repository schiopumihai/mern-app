import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import classNames from '@/utils/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: 'contain' | 'outline';
}

const styles = {
  contain: classNames(
    'bg-primary',
    'rounded-[8px]',
    'text-white',
    'py-[12px]',
    'px-[24px]',
  ),
  outline: classNames(
    'rounded-[8px]',
    'text-primary',
    'py-[12px]',
    'px-[24px]',
    'border-primary',
    'border-[1px]',
  ),
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  buttonType = 'contain',
  ...buttonProps
}) => {
  const buttonStyles = classNames([styles[buttonType], className]);

  return (
    <button {...buttonProps} className={buttonStyles}>
      {children}
    </button>
  );
};
