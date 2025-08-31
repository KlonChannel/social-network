import React, { useEffect } from 'react';
import {getUsers} from "../../redux/subscribers-reducer";
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getUsersArray} from '../../redux/selectors/subscribers-selectors';
import { getUserId } from '../../redux/selectors/auth-selectors';

import Subscribers from './Subscribers';

const SubscribersContainer = (props) => {
    const location = useLocation();
    
    useEffect(() => {
        getUsers(props.id);
    }, [location.search]);

    const getUsers = (id) => {
        props.getUsers(location.search, id);
    };
    
    return (
        <Subscribers users={props.users} getUsers={getUsers}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        id: getUserId(state),
        users: getUsersArray(state)
    })
}

export default connect(mapStateToProps, {getUsers})(SubscribersContainer);