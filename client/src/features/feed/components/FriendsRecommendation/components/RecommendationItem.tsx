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
    <UserImage
      imageUrl={imageUrl}
      fullName={fullName}
      description={description}
    />

    <Button buttonType="outline" className="py-[8px] px-[8px] text-[14px]">
      Connect
    </Button>
  </div>
);
