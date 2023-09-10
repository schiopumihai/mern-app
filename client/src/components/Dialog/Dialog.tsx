import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import { Title } from './components/Title';
import { Content } from './components/Content';
import { Actions } from './components/Actions';

interface DialogProps {
  children?: ReactNode;
  className?: string;
}

const styles = {
  container: classNames('flex', 'h-[100%]', 'items-center', 'justify-center'),
  cardContainer: classNames(
    'bg-white',
    'rounded-[18px]',
    'shadow-sm',
    'py-[40px]',
    'px-[30px]',
  ),
};

export const Dialog = ({ className, children }: DialogProps): ReactNode => {
  const cardStyles = classNames(styles.cardContainer, className);

  return (
    <div className={styles.container}>
      <div className={cardStyles}>{children}</div>
    </div>
  );
};

Dialog.Title = Title;
Dialog.Content = Content;
Dialog.Actions = Actions;
