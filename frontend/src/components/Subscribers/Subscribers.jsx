import React from 'react';

import User from './User/User';

import style from './Subscribers.module.css';

import photo from '../../assets/profile.png';


const Subscribers = (props) => {
    return (
        <div className={style.subscribers}>
            <div className={style.subscribersHeader}>
                <h2>Subscribers</h2>
                
                <form>
                    <input name='search' placeholder='Surname Name...' />
                    
                    <button className={style.button}>Search</button>
                </form>

                <div className={style.menu}>
                    <a>Subscribers</a>
                    
                    <a>My subscribes</a>
                    
                    <a>All users</a>
                </div>
                <div className={style.users}>
                    <User photo={photo} surname='Drozdov' name='Nikita' location='Smolensk' />

                    <User photo={photo} surname='Surname' name='Name' location='Undefined' />

                    <User photo={photo} surname='Viktorov' name='Viktor' location='Moscow' />
                </div>
            </div>
        </div>
    )
}

export default Subscribers;