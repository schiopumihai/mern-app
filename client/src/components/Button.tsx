import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: string;
}

const styles = {
  container: classNames(
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
  buttonType = 'container',
  ...buttonProps
}) => {
  const buttonStyles = classNames([styles?.[buttonType], className]);

  return (
    <button {...buttonProps} className={buttonStyles}>
      {children}
    </button>
  );
};
