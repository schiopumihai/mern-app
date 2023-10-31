import React from 'react';
import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import UserImage from '@/components/UserImage';
import UserPhoto from '@/assets/user.jpg';
import Poster from '@/assets/bg.jpg';

const WriteComment: React.FC = () => {
  return (
    <div className="rounded-full bg-lightGrey p-[8px] flex items-center justify-between">
      <UserImage imageUrl={UserPhoto} imageStyles="h-[26px] w-[26px]" />
      <input
        placeholder="Write a comment"
        className="bg-inherit !outline-none w-full"
      />
      <div className="flex items-center text-textSecondary gap-[8px] mr-[12px]">
        <MicrophoneIcon height={18} />
        <PhotoIcon height={18} />
      </div>
    </div>
  );
};

export const Post: React.FC = () => {
  return (
    <div className="px-[22px] pb-[8px] pt-[14px] card flex flex-col gap-[15px]">
      <div className="flex items-center justify-between">
        <UserImage
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
