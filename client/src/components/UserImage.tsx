import React from 'react';
import classNames from 'classnames';

interface UserImageProps {
  imageUrl: string;
  imageStyles?: string;
}

const styles = {
  userImage: classNames(
    'rounded-[50%]',
    'h-[44px]',
    'w-[44px]',
    'bg-cover',
    'bg-top',
  ),
};

const UserImage: React.FC<UserImageProps> = ({ imageUrl, imageStyles }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={classNames([styles.userImage, imageStyles])}
    />
  );
};

export default UserImage;
