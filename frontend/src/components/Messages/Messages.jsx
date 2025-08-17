import React from 'react';
import { useLocation } from 'react-router-dom';

import Dialogs from './Dialogs/Dialogs';
import MessagesArea from './MessagesArea/MessagesArea';

import style from './Messages.module.css';

const Messages = (props) => {
    const location = useLocation();

    return (
        <div className={style.messages}>
            {location.pathname.match(/^\/messages\/(\d+)$/) && location.pathname !== '/messages/0' ? 
            <MessagesArea getMessages={props.getMessages} messages={props.messages} dialogs={props.dialogs} userName='Surname Name'/> : 
            <Dialogs dialogs={props.dialogs} />}
        </div>
    )
}

export default Messages;