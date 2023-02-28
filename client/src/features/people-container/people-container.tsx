import React from 'react'
import style from './people-container.module.css';

import {ReactComponent as NewChat} from '../../assets/whatsapp-new-chat.svg';

export const PeopleContainer: React.FC = () => {
  return (
    
      <div className={style.container}>people-container
        <div className={style.peopleContainer}></div>
        <div className={style.addPeopleDiv}>
          <button className={style.addPeopleButton} onClick={()=>console.log('added')}>
            <NewChat className={style.addChat}/>
          </button>
        </div>
      
      </div>
      
    
  )
};


