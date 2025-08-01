import React from 'react';

import style from './Header.module.css';

import logo from '../../assets/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className={style.logo}>
                <img src={logo} alt='logo' />
            </div>
            
            <div className={style.name}>
                <h1>Social network</h1>
            </div>

            <div className={style.logIn}>
                <button className={style.button}>Log out</button>
            </div>
        </header>
    )
}

export default Header;