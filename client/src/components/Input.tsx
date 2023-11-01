import React, {
  forwardRef,
  type ReactNode,
  type InputHTMLAttributes,
} from 'react';
import classNames from '@/utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const styles = {
  input: classNames(
    'w-full',
    'p-[14px]',
    'text-MGray',
    'border',
    'border-MGray',
    'rounded-[8px]',
  ),
  label: classNames('text-[16px]', 'ml-[5px]', 'mb-[5px]'),
  container: classNames('min-w-[252px]'),
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ label, ...inputProps }: InputProps, ref: any): ReactNode => {
    return (
      <div className={styles.container}>
        <div className={styles.label}>{label}</div>
        <input className={styles.input} ref={ref} {...inputProps} />
      </div>
    );
  },
);
