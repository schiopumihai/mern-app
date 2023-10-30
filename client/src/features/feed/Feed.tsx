import React from 'react';
import { ThreeColumnLayout } from '@/components/ThreeColumnLayout';
import UserCard from './components/UserCard';
import CreatePost from './components/CreatePost';
import { FriendsRecommendation } from './components/FriendsRecommendation';

export const Feed: React.FC = () => {
  const leftSideBar = <UserCard />;
  const mainContent = <CreatePost />;

  return (
    <ThreeColumnLayout
      leftSideBar={leftSideBar}
      mainContent={mainContent}
      rightSideBar={<FriendsRecommendation />}
    />
  );
};
