import React from 'react';
import {connect} from 'react-redux';

import { logout } from '../../redux/auth-reducer';
import { getIsAuth } from '../../redux/selectors/auth-selectors';

import Header from './Header';

const HeaderContainer = (props) => {
    const logout = () => {
        props.logout();
    }
    
    return (
        <Header logout={logout}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state)
    })
}

export default connect(mapStateToProps, {logout})(HeaderContainer);