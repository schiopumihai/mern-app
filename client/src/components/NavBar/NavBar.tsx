import React from 'react';
import classNames from 'classnames';
import { Logo } from './components/Logo';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

const styles = {
  container: classNames(
    'flex',
    'py-[18px]',
    'px-[140px]',
    'bg-white',
    'items-center',
    'justify-between',
    'gap-[24px]',
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
    link: '',
    Icon: HomeIcon,
  },
  {
    link: 'friends',
    Icon: UserGroupIcon,
  },
  {
    link: 'notifications',
    Icon: BellIcon,
  },
  {
    link: 'messages',
    Icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];

export const NavBar = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        {NAV_LINKS.map(({ link, Icon }, index) => (
          <NavLink
            to={link}
            key={`${link}-${index}`}
            className={({ isActive }) =>
              classNames({ 'text-primary': isActive })
            }
          >
            <Icon className="h-[24px]" />
          </NavLink>
        ))}
      </div>
      <div></div>
    </div>
  );
};
