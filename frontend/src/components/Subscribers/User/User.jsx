import React from 'react';

import style from './User.module.css';

import location from '../../../assets/location.png';
import message from '../../../assets/message.png';
import subscribe from '../../../assets/subscribe.png';

const User = (props) => {
    return (
            <div className={style.user}>
                <div className={style.userPhoto}>
                    <img src={props.photo} alt='photo' />
                </div>
                
                <div className={style.userInfo}>
                    <div className={style.userName}>{props.surname + ' ' + props.name}</div>

                    <div className={style.userLocation}>
                        <img src={location} alt='location' /> <div>{props.location}</div>
                    </div>
                </div>

                <div className={style.buttons}>
                    <div className={style.messageButton}>
                        <img src={message} alt='message' /> <a>Send message</a>
                    </div>
                    
                    <div className={style.subscribeButton}>
                        <img src={subscribe} alt='subscribe' /> <a>Subscribe</a>
                    </div>
                </div>
            </div>
        )
}

export default User;