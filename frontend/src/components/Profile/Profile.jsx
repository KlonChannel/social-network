import React from 'react';
import {NavLink} from "react-router-dom";

import Contact from './Contact/Contact';

import style from './Profile.module.css';

import profile from '../../assets/profile.png';
import edit from '../../assets/edit.png';
import location from '../../assets/location.png';
import message from '../../assets/message.png';
import subscribe from '../../assets/subscribe.png';
import email from '../../assets/email.png';
import vk from '../../assets/vkicon.png';
import telegram from '../../assets/telegramicon.png';
import about from '../../assets/about.png';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.edit}>
                <NavLink to='/edit'>
                    <img src={edit} alt='edit' />
                </NavLink>
            </div>
            <div className={style.userInfo} onClick={props.updatePhoto}>
                <div className={style.profileImage}>
                    <img src={props.image || profile} alt='Profile image' />
                </div>

                <div className={style.mainContent}>
                    <div className={style.name}>
                        <h2>{props.surname} {props.name}</h2>
                    </div>

                    <div className={style.city}>
                        <img src={location || 'none'} alt='location' /> <div>{props.city || 'none'}</div>
                    </div>

                    <div>
                        <b>Profession:</b> {props.profession || 'none'}
                    </div>

                    <div className={style.messageButton}>
                        <img src={message} alt='message' /> <NavLink to='/messages'>Send message</NavLink>
                    </div>

                    <div className={style.subscribeButton}>
                        <img src={subscribe} alt='subscribe' /> <a>Subscribe</a>
                    </div>
                </div>
            </div>

            <div className={style.moreInfo}>
                <div className={style.contacts}>
                    <div className={style.contactsHeading}>
                        Contacts
                    </div>
                    
                    <Contact src={email} alt='email' text={props.email || 'none'}/>

                    <Contact src={vk} alt='vk' text={props.vk? 'https://vk.com' : 'none'} href={props.vk} />

                    <Contact src={telegram} alt='telegram' text={props.vk? 'https://t.me' : 'none'} href={props.telegram} />
                </div>

                <div className={style.about}>
                    <div className={style.aboutHeading}>
                        <img src={about} alt='about' /><b>About user</b>
                    </div>

                    <div className={style.textAboutUser}>
                        {props.about || 'none'}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;