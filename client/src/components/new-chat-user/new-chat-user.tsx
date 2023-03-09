import React from 'react';
import style from './new-chat-user.module.css';

import { ReactComponent as ProfilePic } from '../../assets/default-user.svg';

interface Props {
  status: string;
  name: string;
  openChat?: () => void;
}

export const NewChatUser: React.FC<Props> = ({
  status,
  name,
  openChat,
}: Props) => {
  return (
    <div className={style.container} onClick={openChat}>
      <div className={style.profilePicButton}>
        <ProfilePic className={style.profilePic} />
      </div>
      <div>
        <div className={style.title}>{name}</div>
        <div className={style.statusMsg}>{status}</div>
      </div>
    </div>
  );
};
