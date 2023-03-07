import React, { useState } from 'react'
import style from './people-container.module.css';

import {ReactComponent as NewChatIcon} from '../../assets/whatsapp-new-chat.svg';
import { NewChatModal } from 'client/src/components';
import { NewChatUserList } from 'client/src/components';


export const PeopleContainer: React.FC = () => {
  const [show, setShow] = useState(false)


  return (
    
      <div className={style.container}>
        <div className={style.peopleContainer}></div>
        <div className={style.addPeopleDiv}>
          <button 
          className={style.addPeopleButton} 
          onClick={()=>{
            console.log("added")
            setShow(true)
          }}
          >
          <NewChatIcon className={style.addChat}/>
          </button>
          <NewChatModal
            onClose={() => setShow(false)} 
            showProp={show}
            title="Add new conversation"
          >
            <NewChatUserList/>
          </NewChatModal>
        </div>
      
      </div>
      
    
  )
};


