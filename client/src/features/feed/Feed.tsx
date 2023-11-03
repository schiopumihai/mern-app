import React from 'react';
import { ThreeColumnLayout } from '@/components/ThreeColumnLayout';
import UserCard from './components/UserCard';
import CreatePost from './components/CreatePost';
import { FriendsRecommendation } from './components/FriendsRecommendation';
import { Post } from './components/Post';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames('flex', 'flex-col', 'gap-[18px]'),
};

const FeedContent: React.FC = () => {
  return (
    <div className={styles.container}>
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
