import React from 'react';
import classNames from '@/utils/classNames';
import { Logo } from './components/Logo';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { SearchInput } from './components/SearchInput';
import { ThreeColumnLayout } from '../ThreeColumnLayout';

const styles = {
  container: classNames('py-[18px]', 'bg-white'),
  navContainer: classNames(
    'flex',
    'items-center',
    'gap-[24px]',
    'justify-center',
  ),
  links: classNames(
    'flex flex-1',
    'items-center',
    'justify-between',
    'max-w-[300px]',
    'gap-[24px]',
  ),
};

const NAV_LINKS = [
  {
    link: '/feed',
    Icon: HomeIcon,
  },
  {
    link: '/friends',
    Icon: UserGroupIcon,
  },
  {
    link: '/notifications',
    Icon: BellIcon,
  },
  {
    link: '/messages',
    Icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];

export const NavBar = (): React.ReactNode => {
  const links = NAV_LINKS.map(({ link, Icon }, index) => (
    <NavLink
      to={link}
      key={`${link}-${index}`}
      className={({ isActive }) => classNames({ 'text-primary': isActive })}
    >
      <Icon height={24} />
    </NavLink>
  ));

  return (
    <div className={styles.container}>
      <ThreeColumnLayout
        leftSideBar={<Logo />}
        mainContent={links}
        containerStyles='items-center'
        mainContentStyles={styles.navContainer}
        rightSideBar={<SearchInput />}
      />
    </div>
  );
};
