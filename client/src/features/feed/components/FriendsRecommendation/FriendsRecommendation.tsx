import React from 'react';
import FriendImage from '@/assets/user2.jpg';
import { RecommendationItem } from './components/RecommendationItem';

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
