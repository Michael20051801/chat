import React from 'react';
import style from './card-container.module.css';

import { MessagesContainer } from 'client/src/components';
import { InputContainer } from 'client/src/components';

export const CardContainer: React.FC = () => {
    return (
        <div className={style.container}>
            <MessagesContainer/>
            <InputContainer/>
        </div>
    )
};