import React from 'react';
import classNames from 'classnames';

interface UserImageProps {
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
};

const UserImage: React.FC<UserImageProps> = ({
  imageUrl,
  imageStyles,
  fullName,
  description,
}) => {
  return (
    <div className="flex items-center gap-[8px]">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={classNames([styles.userImage, imageStyles])}
      />
      <div>
        {fullName && (
          <div className="text-[14px] font-semibold">{fullName}</div>
        )}
        {description && (
          <div className="text-[14px] text-textSecondary">{description}</div>
        )}
      </div>
    </div>
  );
};

export default UserImage;
