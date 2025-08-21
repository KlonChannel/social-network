import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

import FormControl from '../common/FormControl/FormControl';

import style from './Registration.module.css';

const Registration = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Login cannot be empty');
    const [passwordError, setPasswordError] = useState('Password cannot be empty');
    const [repeatPasswordError, setRepeatPasswordError] = useState('Password cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
            if (loginError || passwordError || repeatPasswordError) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }
    }, [loginError, passwordError, repeatPasswordError]);

    const loginHandler = (e) => {
        setLogin(e.target.value);
        
        const validation = /^[a-zA-Z0-9_-]{5,15}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length < 5 || e.target.value.length > 15) {
                setLoginError('The login must be between 5 and 15 characters long.');
            } else {
                setLoginError('Invalid login format');
            }
        } else {
            setLoginError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        
        const validation = /^[a-zA-Z0-9_-]{8,15}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length < 8 || e.target.value.length > 15) {
                setPasswordError('The password must be between 8 and 15 characters long.');
            } else {
                setPasswordError('Invalid password format');
            }
        } else {
            setPasswordError('');
        }
    };

    const repeatPasswordHandler = (e) => {
        setRepeatPassword(e.target.value);
        
        const validation = /^[a-zA-Z0-9_-]{8,15}$/;

        if (!validation.test(String(e.target.value))) {
            if (e.target.value.length < 8 || e.target.value.length > 15) {
                setRepeatPasswordError('The password must be between 8 and 15 characters long.');
            } else {
                setRepeatPasswordError(`Passwords don't match`);
            }
        } else {
            setRepeatPasswordError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'passwordVerification':
                setRepeatPasswordDirty(true);
                break;
        }
    };

    return (
        <div className={style.registrationWindow}>
            <div className={style.registrationBlock}>
                <h2 className={style.h2}>Registration</h2>

                <form className={style.registrationForm}>
                    <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name='login' placeholder='Login' />
                    {(loginDirty && loginError) && <FormControl errorText={loginError} />}

                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Password'></input>
                    {(passwordDirty && passwordError) && <FormControl errorText={passwordError} />}

                    <input onChange={e => repeatPasswordHandler(e)} value={repeatPassword} onBlur={e => blurHandler(e)} name='passwordVerification' type='password' placeholder='Repeat password'></input>
                    {(repeatPasswordDirty && repeatPasswordError) && <FormControl errorText={repeatPasswordError} />}

                    <button className={style.button}>Confirm</button>
                </form>

                Do you have an account? <NavLink to='/login' href='#'>Log in</NavLink>
            </div>
        </div >
    )
}

export default Registration;