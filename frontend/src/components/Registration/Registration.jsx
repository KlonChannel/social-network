import React from 'react';

import style from './Registration.module.css';

const Registration = (props) => {
    return (
        <div className={style.RegistrationWindow}>
            <h2 className={style.h2}>Registration</h2>
            
            <form className={style.registrationForm}>
                <input name='login' placeholder='Login' />
                
                <input name='password' type='password' placeholder='Password'></input>

                <input name='passwordVerification' type='password' placeholder='Repeat password'></input>
                
                <button className={style.button}>Confirm</button>
            </form>

            Do you have an account? <a href='#'>Log in</a>
        </div>
    )
}

export default Registration;