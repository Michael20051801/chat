import React from 'react'
import style from './new-chat-modal.module.css';

interface Props {
    showProp: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
}

export const NewChatModal: React.FC<Props> = ({ showProp, onClose, title, children }: Props) => {
    
    let modalStyle = style.modal;
    if(showProp){
        modalStyle += " " + style.show;
    }

    return(
        <div className={modalStyle} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <div className={style.modalHeader}>
                    <h4 className={style.modalTitle}>{title}</h4>
                </div>
                <div className={style.modalBody}>
                    {children}
                </div>

                <div className={style.modalFooter}>
                    <button 
                    className={style.closeButton}
                    onClick={onClose}
                    >
                    Close
                    </button>
                </div>
                {/* <span className="style.close">&times;</span> */}
            </div>
        </div>
    )
}
