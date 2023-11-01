import React from 'react';
import classNames from '@/utils/classNames';

interface AvatarProps {
  imageUrl: string;
  imageStyles?: string;
  fullName?: string;
  description?: string;
}

const styles = {
  userImage: classNames(
    'rounded-[50%]',
    'h-[44px]',
    'w-[44px]',
    'bg-cover',
    'bg-top',
  ),
  fullName: classNames('text-[14px]', 'font-semibold'),
  description: classNames('text-[14px]', 'text-textSecondary'),
  container: classNames('flex', 'items-center', 'gap-[8px]'),
};

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  imageStyles,
  fullName,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={classNames(styles.userImage, imageStyles)}
      />
      <div>
        {fullName && <div className={styles.fullName}>{fullName}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

export default Avatar;
