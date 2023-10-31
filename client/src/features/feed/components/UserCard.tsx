import React from 'react';
import BackGround from '@/assets/bg.jpg';
import UserPhoto from '@/assets/user.jpg';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames('card'),
  backGround: classNames('bg-cover', 'h-[100px]', 'bg-center'),
  userContainer: classNames('flex', 'px-[16px]', 'pb-[24px]', 'gap-[8px]'),
  userPhoto: classNames(
    'rounded-[50%]',
    'h-[54px]',
    'w-[54px]',
    'relative',
    'top-[-27px]',
    'bg-cover',
    'bg-top',
  ),
  userName: classNames('text-[16px]', 'font-semibold'),
  userDescription: classNames('text-textSecondary', 'text-[14px]'),
};

const UserCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backGround}
        style={{
          backgroundImage: `url(${BackGround})`,
        }}
      />
      <div className={styles.userContainer}>
        <div
          style={{
            backgroundImage: `url(${UserPhoto})`,
          }}
          className={styles.userPhoto}
        />
        <div>
          <div className={styles.userName}>Tony Stark</div>
          <div className={styles.userDescription}>Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
