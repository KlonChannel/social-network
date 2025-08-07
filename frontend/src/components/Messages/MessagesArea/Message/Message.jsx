import React from 'react';

import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={`${style.message} ${props.isOurMessage? style.ourMessage : ''}`}>
            <div className={`${style.messageText} ${props.isOurMessage? style.ourMessageText : ''}`}>
                {props.text}
            </div>
        </div>
    )
}

export default Message;