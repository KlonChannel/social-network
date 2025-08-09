import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Menu.module.css';

const Menu = (props) => {
    const activeCheck = ({ isActive }) => (isActive ? style.active : '')
    
    return (
        <nav>
            <div className={style.buttonsArea}>
                <NavLink to='/profile' className={activeCheck}>Profile</NavLink>
                <NavLink to='/subscribers' className={activeCheck}>Subscribers</NavLink>
                <NavLink to='/posts' className={activeCheck}>Posts</NavLink>
                <NavLink to='/messages' className={activeCheck}>Messages</NavLink>
                <NavLink to='/music' className={activeCheck}>Music</NavLink>
            </div>
        </nav>
    )
}

export default Menu;