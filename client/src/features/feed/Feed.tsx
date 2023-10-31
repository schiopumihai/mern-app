import React from 'react';
import { ThreeColumnLayout } from '@/components/ThreeColumnLayout';
import UserCard from './components/UserCard';
import CreatePost from './components/CreatePost';
import { FriendsRecommendation } from './components/FriendsRecommendation';
import { Post } from './components/Post';

const FeedContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-[18px]">
      <CreatePost />
      <Post />
    </div>
  );
};

export const Feed: React.FC = () => {
  return (
    <ThreeColumnLayout
      leftSideBar={<UserCard />}
      mainContent={<FeedContent />}
      rightSideBar={<FriendsRecommendation />}
    />
  );
};
