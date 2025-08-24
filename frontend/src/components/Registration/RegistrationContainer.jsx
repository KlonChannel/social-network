import React from 'react';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import { registration } from '../../redux/auth-reducer';
import { getIsAuth, getLogin, getLoginBusy, getUserId } from '../../redux/selectors/auth-selectors';

import Registration from './Registration';

const RegistrationContainer = (props) => {
    const registration = (login, password) => {
        props.registration(login, password);
    }
    
    if (props.isAuth) {
        return <Navigate to={`/profile/${props.id}`} />
    }

    return (
        <Registration registration={registration} isLoginBusy={props.isLoginBusy}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state),
        login: getLogin(state),
        isLoginBusy: getLoginBusy(state),
        id: getUserId(state)
    })
}

export default connect(mapStateToProps, {registration})(RegistrationContainer);