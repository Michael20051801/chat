import React from 'react';
import { NewChatUser } from 'client/src/components';
import style from './new-chat-user-list.module.css';
import { CardContainer } from 'client/src/features';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserToList, RootState } from 'client/src/store';

interface Props {
  onClose: () => void;
}

export const NewChatUserList: React.FC<Props> = ({ onClose }: Props) => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  return users.length == 0 ? (
    <div className={style.empty}>You have no contacts!</div>
  ) : (
    <div className={style.container}>
      {users.map((user, index) => (
        <div
          className={style.user}
          onClick={() => {
            dispatch(addUserToList(user));
            onClose();
          }}
        >
          <NewChatUser name={user.name} status={user.status} />
        </div>
      ))}
    </div>
  );
};
