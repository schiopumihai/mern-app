import React, { type ReactNode, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ label, ...rest }: { label: string }, ref): ReactNode => {
    return (
      <div className="min-w-[252px]">
        <div className="text-[16px] ml-[5px] mb-[5px]">{label}</div>
        <input
          className="w-[100%] p-[14px] text-MGray border border-MGray rounded-[8px]"
          {...rest}
        />
      </div>
    );
  },
);
