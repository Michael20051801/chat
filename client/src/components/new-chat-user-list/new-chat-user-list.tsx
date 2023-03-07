import React from 'react';
import { NewChatUser } from 'client/src/components';
// '../new-chat-user/new-chat-user';
import style from './new-chat-user-list.module.css';
import { CardContainer } from 'client/src/features';



export const NewChatUserList :React.FC = () => {
    

    // const userArray = [];

    return (
        <div className={style.container}>
            <div>
                <NewChatUser
                  status={`Hi! I'm using MicChat.`}
                  name={`User 1`}
                  openChat={() => {
                    <CardContainer/>}
                  }
                ></NewChatUser>
            </div>
            <div>
                <NewChatUser
                  status={`Loving trips, the sun and the ground.`}
                  name={`User 2`}
                  openChat={() => {
                    <CardContainer/>}}
                ></NewChatUser>
            </div>
            <div>
                <NewChatUser
                  status={`At the gym.`}
                  name={`User 3`}
                  openChat={() => {
                    <CardContainer/>}
                  }
                ></NewChatUser>
            </div>
            
        </div>
    )
}
