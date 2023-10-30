import React from 'react';
import {
  PhotoIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import UserPhoto from '@/assets/user.jpg';
import classNames from 'classnames';

const CreatePost: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center gap-[16px] px-[26px] pt-[16px] pb-[42px]">
        <div
          style={{
            backgroundImage: `url(${UserPhoto})`,
          }}
          className={classNames(
            'rounded-[50%]',
            'h-[44px]',
            'w-[44px]',
            'bg-cover',
            'bg-top',
          )}
        />
        <input
          placeholder="Write something ..."
          className="!outline-none w-[100%]"
        />
      </div>
      <div
        className={
          'bg-primaryLight flex items-center text-slate-500'
        }
      >
        <div className="flex justify-center flex-1 items-center gap-[8px] text-slate-500 p-[25px]">
          <PhotoIcon className="h-[24px] w-[24px]" />
          <div>Photo</div>
        </div>
        <div className="flex justify-center flex-1 items-center gap-[8px] p-[25px]">
          <VideoCameraIcon className="h-[24px] w-[24px]" />
          <div>Video</div>
        </div>
        <div className="flex justify-center flex-1 items-center gap-[8px] p-[25px]"> 
          <CalendarDaysIcon className="h-[24px] w-[24px]" />
          <div>Event</div>
        </div>
        <div className="flex justify-center flex-1 items-center gap-[8px] p-[25px]">
          <DocumentTextIcon className="h-[24px] w-[24px]" />
          <div>Article</div>
        </div>
        <div className="flex justify-center flex-1 items-center gap-[8px] bg-primaryMedium p-[25px]">
          <PaperAirplaneIcon className="h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
