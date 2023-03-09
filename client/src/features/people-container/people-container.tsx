import React, { useState } from 'react';
import style from './people-container.module.css';

import { ReactComponent as NewChatIcon } from '../../assets/whatsapp-new-chat.svg';
import { NewChatModal, NewChatUser } from 'client/src/components';
import { NewChatUserList } from 'client/src/components';
import { useSelector } from 'react-redux';
import { RootState } from 'client/src/store';

export const PeopleContainer: React.FC = () => {
  const [show, setShow] = useState(false);
  const usersList = useSelector((state: RootState) => state.usersList);

  return (
    <div className={style.container}>
      <div className={style.peopleContainer}>
        {/* This is the list where the clicked users will show */}
        {usersList.map((user) => (
          <NewChatUser name={user.name} status={user.status} />
        ))}
      </div>
      <div className={style.addPeopleDiv}>
        <button
          className={style.addPeopleButton}
          onClick={() => {
            console.log('added');
            setShow(true);
          }}
        >
          <NewChatIcon className={style.addChat} />
        </button>
        <NewChatModal
          onClose={() => setShow(false)}
          showProp={show}
          title="Add new conversation"
        >
          <NewChatUserList />
        </NewChatModal>
      </div>
    </div>
  );
};
