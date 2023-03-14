import React, { MouseEvent, KeyboardEvent, useState, ChangeEvent} from 'react';
import style from './input-container.module.css';
import { saveMessage } from 'client/src/store';
import { useDispatch } from 'react-redux';

import { ReactComponent as PaperPlane } from '../../assets/paper-plane.svg';
import { MessagesContainer } from '../messages-container';




export const InputContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("")


  // function save(value:string) {
  //   dispatch(saveMessage(value))
  // }

  const handleClick = () => {
    // alert(value)
    // if (value != "") {
      dispatch(saveMessage(value))
      setValue("")
    // }
  }

  const handleChange = (event:ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const newValue = target.value
    setValue(newValue)
  }

  return (
    <div className={style.container}>
      <input 
        className={style.inputField} 
        type="text" 
        placeholder={"Write something..."} 
        value={value}
        onChange={handleChange}
      />
      <button
        className={style.sendButton}
        onClick={handleClick}
      >
        <PaperPlane className={style.paperPlane} />
      </button>
    </div>
  );
};
