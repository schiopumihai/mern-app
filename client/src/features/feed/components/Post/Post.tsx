import React from 'react';
import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import Avatar from '@/components/Avatar';
import UserPhoto from '@/assets/user.jpg';
import Poster from '@/assets/bg.jpg';
import { WriteComment } from './components/WriteComment';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames(
    'px-[22px]',
    'pb-[8px]',
    'pt-[14px]',
    'card',
    'flex',
    'flex-col',
    'gap-[15px]',
  ),
};

export const Post: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-between">
        <Avatar
          imageUrl={UserPhoto}
          fullName="Tony Stark"
          description="Engineer"
        />
        <button>
          <EllipsisVerticalIcon
            height={34}
            className="text-textGrey font-bold"
          />
        </button>
      </div>

      <div>New poster</div>

      <div className="rounded-[18px] overflow-hidden">
        <img src={Poster} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-[8px]">
          <HandThumbUpIcon height={24} />
          <ChatBubbleOvalLeftIcon height={24} />
          <PaperAirplaneIcon height={24} />
        </div>
        <BookmarkIcon height={24} />
      </div>

      <WriteComment />
    </div>
  );
};


