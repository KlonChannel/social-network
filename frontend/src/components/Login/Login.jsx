import React from 'react';

import style from './Login.module.css';

const Login = (props) => {
    return (
        <div className={style.loginWindow}>
            <h2 className={style.h2}>Log in</h2>
            
            <form className={style.loginForm}>
                <input name='login' placeholder='Login' />
                
                <input name='password' type='password' placeholder='Password'></input>
                
                <div className={style.checkboxContainer}>
                    <input name='rememberMe' className={style.checkbox} type='checkbox'/> Remember me
                </div>

                <button className={style.button}>Confirm</button>
            </form>

            No account? <a href='#'>Register</a>
        </div>
    )
}

export default Login;