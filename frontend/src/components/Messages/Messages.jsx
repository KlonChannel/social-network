import React from 'react';

import Dialogs from './Dialogs/Dialogs';
import MessagesArea from './MessagesArea/MessagesArea'

import style from './Messages.module.css';

import profile from '../../assets/profile.png'

const Messages = (props) => {
    return (
        <div className={style.messages}>
            <Dialogs dialogs={props.dialogs} />
        </div>
    )
}

export default Messages;