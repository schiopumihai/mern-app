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

const styles = {
  container: classNames('card'),
  inputContainer: classNames(
    'flex',
    'items-center',
    'gap-[16px]',
    'px-[26px]',
    'pt-[16px]',
    'pb-[42px]',
  ),
  userImage: classNames(
    'rounded-[50%]',
    'h-[44px]',
    'w-[44px]',
    'bg-cover',
    'bg-top',
  ),
  input: classNames('!outline-none', 'w-[100%]'),
  actionsContainer: classNames(
    'bg-primaryLight',
    'flex',
    'items-center',
    'text-slate-500',
  ),
  action: classNames(
    'flex',
    'justify-center',
    'flex-1',
    'items-center',
    'gap-[8px]',
    'py-[25px]',
    'cursor-pointer',
  ),
};

const CreatePost: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div
          style={{
            backgroundImage: `url(${UserPhoto})`,
          }}
          className={styles.userImage}
        />
        <input placeholder="Write something ..." className={styles.input} />
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.action}>
          <PhotoIcon height={24} width={24} />
          <div>Photo</div>
        </div>
        <div className={styles.action}>
          <VideoCameraIcon height={24} width={24} />
          <div>Video</div>
        </div>
        <div className={styles.action}>
          <CalendarDaysIcon height={24} width={24} />
          <div>Event</div>
        </div>
        <div className={styles.action}>
          <DocumentTextIcon height={24} width={24} />
          <div>Article</div>
        </div>
        <div className={classNames(styles.action, 'bg-primaryMedium')}>
          <PaperAirplaneIcon height={24} width={24} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
