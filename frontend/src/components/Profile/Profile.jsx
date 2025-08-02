import React from 'react';

import Contact from './Contact/Contact';

import style from './Profile.module.css';

import profile from '../../assets/profile.png';
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
            <div className={style.userInfo}>
                <div className={style.profileImage}>
                    <img src={profile} alt='Profile image' />
                </div>

                <div className={style.mainContent}>
                    <div className={style.name}>
                        <h2>Surname Name</h2>
                    </div>

                    <div className={style.city}>
                        <img src={location} alt='location' /> <div>Moscow</div>
                    </div>

                    <div>
                        <b>Profession:</b> programmer
                    </div>

                    <div className={style.messageButton}>
                        <img src={message} alt='message' /> <a>Send message</a>
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
                    
                    <Contact src={email} alt='email' text='Email@email.com' />

                    <Contact src={vk} alt='vk' text='https://vk.com' />

                    <Contact src={telegram} alt='telegram' text='https://t.me' />
                </div>

                <div className={style.about}>
                    <div className={style.aboutHeading}>
                        <img src={about} alt='about' /><b>About user</b>
                    </div>

                    <div className={style.textAboutUser}>
                        Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;