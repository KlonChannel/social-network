import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

import Message from './Message/Message';

import style from './MessagesArea.module.css';

import back from '../../../assets/backicon.png';
import userPhoto from '../../../assets/profile.png';

const MessagesArea = (props) => {
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        props.getMessages();
    }, []);

    const messageHandler = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className={style.messagesArea}>
            <div className={style.userInfo}>
                <div className={style.backButton}>
                    <NavLink to='/messages'>
                        <img src={back} alt='back' />
                    </NavLink>
                </div>
                <div className={style.userPhoto}>
                    <img src={userPhoto} alt='user photo' />
                </div>

                <div className={style.userName}>
                    {props.userName}
                </div>
            </div>

            <div className={style.messages}>
                {
                    props.messages.map(message => <Message key={message.id}
                                                           text={message.text}
                                                           isOurMessage={message.authorId === 1}/>
                    )
                }
            </div>

            <form className={style.messagesForm}>
                <textarea onChange={e => messageHandler(e)} value={message} name='message' placeholder='Your message...' maxLength={1000} />

                <button className={style.button}>Send</button>
            </form>
        </div>
    )
}

export default MessagesArea;