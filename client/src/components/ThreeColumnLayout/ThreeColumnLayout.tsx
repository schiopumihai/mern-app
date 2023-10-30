import React, { type ReactNode } from 'react';

interface ThreeColumnLayoutProps {
  leftSideBar: ReactNode;
  rightSideBar: ReactNode;
  mainContent: ReactNode;
}

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftSideBar,
  rightSideBar,
  mainContent,
}) => {
  return (
    <div className="flex items-start gap-[18px]">
      <div className="w-[278px]">{leftSideBar}</div>
      <div className="w-[578px]">{mainContent}</div>
      <div className="w-[278px]">{rightSideBar}</div>
    </div>
  );
};
