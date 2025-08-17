import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${props.id}`} className={style.dialogLink}>
                <div className={style.userPhoto}>
                    <img src={props.userPhoto} alt='user photo' />
                </div>

                <div className={style.userName}>
                    {props.userName}
                </div>
            </NavLink>
        </div>
    )
}

export default Dialog;