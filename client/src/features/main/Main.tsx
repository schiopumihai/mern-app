import React from 'react';
import { ThreeColumnLayout } from '@/components/ThreeColumnLayout/ThreeColumnLayout';
import UserCard from '../user/UserCard';
import CreatePost from '../user/CreatePost';

export const Main: React.FC = () => {
  const leftSideBar = <UserCard />;
  const mainContent = <CreatePost />;

  return (
    <ThreeColumnLayout
      leftSideBar={leftSideBar}
      mainContent={mainContent}
      rightSideBar={<div className="card">dsada</div>}
    />
  );
};
