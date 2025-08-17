import React from 'react';

import Dialog from './Dialog/Dialog';

import style from './Dialogs.module.css';

import profile from '../../../assets/profile.png';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <h2>Messages</h2>

            <form>
                <input name='search' placeholder='Surname Name...' />

                <button className={style.button}>Search</button>
            </form>

            <div>
                {
                    props.dialogs.map(dialog => <Dialog key={dialog.id}
                                                      userPhoto={profile}
                                                      userName={`${dialog.surname} ${dialog.name}`}/>
                    )
                }
            </div>
        </div>
    )
}

export default Dialogs;