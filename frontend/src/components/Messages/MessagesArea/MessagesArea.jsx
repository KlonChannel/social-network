import React from 'react';

import Message from './Message/Message';

import style from './MessagesArea.module.css';

import back from '../../../assets/backicon.png';

const MessagesArea = (props) => {
    return (
        <div className={style.messagesArea}>
            <div className={style.userInfo}>
                <div className={style.backButton}>
                    <a>
                        <img src={back} alt='back' />
                    </a>
                </div>
                <div className={style.userPhoto}>
                    <img src={props.userPhoto} alt='user photo' />
                </div>

                <div className={style.userName}>
                    {props.userName}
                </div>
            </div>

            <div className={style.messages}>
                <Message text='Hello! Im your best friend!' isOurMessage={false}/>

                <Message text='Hello! My friend! I am glad that you wrote to me on this educational social network. How do you like the design and functionality?' isOurMessage={true}/>

                <Message text='Very interesting for the first React app.' isOurMessage={false}/>

                <Message text='Has it been developed for a long time?' isOurMessage={false}/>

                <Message text='Sorry, I dont known...' isOurMessage={true}/>
            </div>

            <form className={style.messagesForm}>
                <textarea name='message' placeholder='Your message...' maxLength={1000} />

                <button className={style.button}>Send</button>
            </form>
        </div>
    )
}

export default MessagesArea;