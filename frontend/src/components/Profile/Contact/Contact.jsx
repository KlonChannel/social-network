import React from 'react';

import style from './Contact.module.css';

const Contact = (props) => {
    return (
            <div className={style.contactsRef}>
                <img src={props.src} alt={props.alt} /> <a>{props.text}</a>
            </div>
        )
}

export default Contact;