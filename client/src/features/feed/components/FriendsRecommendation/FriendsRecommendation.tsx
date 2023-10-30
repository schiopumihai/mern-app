import React from 'react';
import UserImage from '@/components/UserImage';
import FriendImage from '@/assets/user2.jpg';
import { Button } from '@/components/Button';

interface RecommendationItemProps {
  fullName: string;
  imageUrl: string;
  description: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
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

export const FriendsRecommendation: React.FC = () => {
  return (
    <div className="card">
      <div className="pt-[24px] px-[22px]  text-[16px] font-semibold">
        People you may know:
      </div>
      <div className="py-[26px] px-[22px] gap-[24px] flex flex-col">
        <RecommendationItem
          imageUrl={FriendImage}
          fullName="Peter Parker"
          description="Scientist"
        />
        <RecommendationItem
          imageUrl={FriendImage}
          fullName="Peter Parker"
          description="Scientist"
        />
        <RecommendationItem
          imageUrl={FriendImage}
          fullName="Peter Parker"
          description="Scientist"
        />
      </div>
      <div className="py-[16px] flex justify-center border-t-[1px]">
        <button className="text-primary">See All</button>
      </div>
    </div>
  );
};
