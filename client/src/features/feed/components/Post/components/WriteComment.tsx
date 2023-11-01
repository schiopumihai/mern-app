import React from 'react';
import { MicrophoneIcon, PhotoIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/Avatar';
import UserPhoto from '@/assets/user.jpg';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames(
    'rounded-full',
    'bg-lightGrey',
    'p-[8px]',
    'flex',
    'items-center',
    'justify-between',
  ),
  input: classNames('bg-inherit', '!outline-none', 'w-full'),
  actions: classNames(
    'flex',
    'items-center',
    'text-textSecondary',
    'gap-[8px]',
    'mr-[12px]',
  ),
};

export const WriteComment: React.FC = () => {
  return (
    <div className={styles.container}>
      <Avatar imageUrl={UserPhoto} imageStyles="h-[26px] w-[26px]" />
      <input placeholder="Write a comment" className={styles.input} />
      <div className={styles.actions}>
        <MicrophoneIcon height={18} />
        <PhotoIcon height={18} />
      </div>
    </div>
  );
};
