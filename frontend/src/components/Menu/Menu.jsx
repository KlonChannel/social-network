import React from 'react';

import style from './Menu.module.css';

const Menu = (props) => {
    return (
        <nav>
            <div className={style.buttonsArea}>
                <a>Profile</a>
                <a>Subscribers</a>
                <a>Posts</a>
                <a>Messages</a>
                <a>Music</a>
            </div>
        </nav>
    )
}

export default Menu;