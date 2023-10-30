import React from 'react';
import { ThreeColumnLayout } from '@/components/ThreeColumnLayout';
import UserCard from './components/UserCard';
import CreatePost from './components/CreatePost';
import { FriendsRecommendation } from './components/FriendsRecommendation';

export const Feed: React.FC = () => {
  return (
    <ThreeColumnLayout
      leftSideBar={<UserCard />}
      mainContent={<CreatePost />}
      rightSideBar={<FriendsRecommendation />}
    />
  );
};
