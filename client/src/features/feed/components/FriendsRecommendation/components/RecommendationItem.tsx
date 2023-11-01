import React from 'react';
import Avatar from '@/components/Avatar';
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
    <Avatar
      imageUrl={imageUrl}
      fullName={fullName}
      description={description}
    />

    <Button buttonType="outline" className="py-[8px] px-[8px] text-[14px]">
      Connect
    </Button>
  </div>
);
