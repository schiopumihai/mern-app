import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames(
    'flex',
    'items-center',
    'bg-lightGrey',
    'rounded-[18px]',
    'overflow-hidden',
  ),
  input: classNames('bg-inherit', 'ml-[14px]', 'flex-1', '!outline-none'),
  searchButton: classNames('py-[10px]', 'px-[20px]', 'bg-lightBlue'),
};

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Search" className={styles.input} />
      <button className={styles.searchButton}>
        <MagnifyingGlassIcon height={24} />
      </button>
    </div>
  );
};
