import React from 'react';

import style from './Footer.module.css';

import logo from '../../assets/logo.png';
import github from '../../assets/githubicon.png';
import telegram from '../../assets/telegramicon.png';

const Footer = (props) => {
    return (
        <footer>
            <div className={style.siteName}>
                <div className={style.logo}>
                    <img src={logo} alt='logo' />
                </div>

                <div className={style.text}>
                    <b>Social network</b>
                </div>
            </div>

            <div className={style.author}>©Nikita Drozdov</div>

            <div className={style.contacts}>
                <a href='https://github.com/KlonChannel' target='_blank'>
                    <img src={github} alt='github' />
                </a>
                
                <a href='https://t.me/klonchannel' target='_blank'>
                    <img src={telegram} alt='telegram' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;