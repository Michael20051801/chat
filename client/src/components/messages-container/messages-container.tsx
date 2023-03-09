import React from 'react'
import style from './messages-container.module.css';

interface Props {
  message?: string
}

export const MessagesContainer :React.FC<Props> = ({message}: Props) => {
    return (
      <div className={style.container}>
        <div className={style.msgCloud}>
          {message}
        </div>
      </div>
    )
}
