import React from 'react'
import style from './input-container.module.css';

import {ReactComponent as PaperPlane} from '../../assets/paper-plane.svg';
import { MessagesContainer } from '../messages-container';

export const InputContainer :React.FC = () => {
  return (
    <div className={style.container}>
      <input className={style.inputField} type="text"/>
      <button 
        className={style.sendButton} 
        onClick={()=>{
          <MessagesContainer
            message = "yes"
          />
        }}
      >
        <PaperPlane className={style.paperPlane}/>
      </button>
      
    </div>
  )
}
