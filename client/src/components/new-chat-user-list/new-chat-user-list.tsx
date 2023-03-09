import React from 'react';
import { NewChatUser } from 'client/src/components';
import style from './new-chat-user-list.module.css';
import { CardContainer } from 'client/src/features';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserToList, RootState } from 'client/src/store';

export const NewChatUserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      {users.map((user) => (
        <div>
          <NewChatUser
            name={user.name}
            status={user.status}
            openChat={() => dispatch(addUserToList(user))}
          />
        </div>
      ))}
    </div>
  );
};
