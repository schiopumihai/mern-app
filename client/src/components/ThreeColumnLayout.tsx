import classNames from 'classnames';
import React, { type ReactNode } from 'react';

interface ThreeColumnLayoutProps {
  leftSideBar: ReactNode;
  rightSideBar: ReactNode;
  mainContent: ReactNode;
  containerStyles?: string;
  leftSideBarStyles?: string;
  mainContentStyles?: string;
  rightSideBarStyles?: string;
}

const styles = {
  container: classNames(
    'flex',
    'items-start',
    'gap-[18px]',
    'w-[1128px]',
    'mx-auto',
  ),
  leftSideBar: classNames('w-1/4'),
  mainContent: classNames('w-1/2'),
  rightSideBar: classNames('w-1/4'),
};

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftSideBar,
  rightSideBar,
  mainContent,
  containerStyles,
  leftSideBarStyles,
  mainContentStyles,
  rightSideBarStyles,
}) => {
  return (
    <div className={classNames([styles.container, containerStyles])}>
      <div className={classNames([styles.leftSideBar, leftSideBarStyles])}>
        {leftSideBar}
      </div>
      <div className={classNames([styles.mainContent, mainContentStyles])}>
        {mainContent}
      </div>
      <div className={classNames([styles.rightSideBar, rightSideBarStyles])}>
        {rightSideBar}
      </div>
    </div>
  );
};
