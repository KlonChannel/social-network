import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

import User from './User/User';

import style from './Subscribers.module.css';

import photo from '../../assets/profile.png';


const Subscribers = (props) => {
    const location = useLocation();

    const activeCheck = (query) => ( location.search === query ? style.active : '');
    
    return (
        <div className={style.subscribers}>
            <div className={style.subscribersHeader}>
                <h2>Subscribers</h2>
                
                <form>
                    <input name='search' placeholder='Surname Name...' />
                    
                    <button className={style.button}>Search</button>
                </form>

                <div className={style.menu}>
                    <NavLink to='/subscribers?type=subscribers' onClick={props.getUsers} className={activeCheck('?type=subscribers') || activeCheck('')}>Subscribers</NavLink>
                    
                    <NavLink to='/subscribers?type=my' onClick={props.getUsers} className={activeCheck('?type=my')}>My subscribes</NavLink>
                    
                    <NavLink to='/subscribers?type=all' onClick={props.getUsers} className={activeCheck('?type=all')}>All users</NavLink>
                </div>
                <div className={style.users}>
                    {
                        props.users.map(user => <User key={user.id}
                                                      photo={photo}
                                                      surname={user.surname}
                                                      name={user.name}
                                                      location={user.location}/>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Subscribers;