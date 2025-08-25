import React from 'react';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth-reducer';
import { getIsAuth, getUserId, getAuthError } from '../../redux/selectors/auth-selectors';

import Login from './Login';

const LoginContainer = (props) => {
    const login = (login, password) => {
        props.login(login, password);
    }
    
    if (props.isAuth) {
        return <Navigate to={`/profile/${props.id}`} />
    }

    return (
        <Login login={login} authError={props.authError}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state),
        id: getUserId(state),
        authError: getAuthError(state)
    })
}

export default connect(mapStateToProps, {login})(LoginContainer);