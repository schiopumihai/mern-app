import React from 'react';
import UserImage from '@/components/UserImage';
import { Button } from '@/components/Button';

interface RecommendationItemProps {
  fullName: string;
  imageUrl: string;
  description: string;
}

export const RecommendationItem: React.FC<RecommendationItemProps> = ({
  fullName,
  imageUrl,
  description,
}) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-[8px]">
      <UserImage imageUrl={imageUrl} />
      <div>
        <div className="text-[14px] font-semibold">{fullName}</div>
        <div className="text-[14px] text-textSecondary">{description}</div>
      </div>
    </div>
    <Button buttonType="outline" className="py-[8px] px-[8px] text-[14px]">
      Connect
    </Button>
  </div>
);
