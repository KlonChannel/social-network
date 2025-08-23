import React from 'react';
import {connect} from 'react-redux';
import { registration } from '../../redux/auth-reducer';

import Registration from './Registration';

const RegistrationContainer = (props) => {
    const registration = (login, password) => {
        props.registration(login, password);
    }
    
    return (
        <Registration registration={registration}/>
    )
}

let mapStateToProps = (state) => {
    return ({})
}

export default connect(mapStateToProps, {registration})(RegistrationContainer);