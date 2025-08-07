import React from 'react';

import style from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <a className={style.dialogLink}>
                <div className={style.userPhoto}>
                    <img src={props.userPhoto} alt='user photo' />
                </div>

                <div className={style.userName}>
                    {props.userName}
                </div>
            </a>
        </div>
    )
}

export default Dialog;