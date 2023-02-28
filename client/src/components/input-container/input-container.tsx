import React from 'react'
import style from './input-container.module.css';

import {ReactComponent as PaperPlane} from '../../assets/paper-plane.svg';

export const InputContainer :React.FC = () => {
  return (
    <div className={style.container}>
      <button className={style.sendButton} onClick={()=>console.log('sent')}>
        <PaperPlane className={style.paperPlane}/>
      </button>
      <input className={style.inputField} type="text"/>
      
    </div>
  )
}
