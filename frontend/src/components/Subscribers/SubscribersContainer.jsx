import React, { useState, useEffect } from 'react';
import {getUsers} from "../../redux/subscribers-reducer";
import {connect} from 'react-redux';
import {useLocation} from "react-router-dom";

import Subscribers from './Subscribers';

const SubscribersContainer = (props) => {
    const location = useLocation();

    useEffect(() => {
        getUsers();
    }, [location.search]);

    const getUsers = () => {
        props.getUsers(location.search);
    }
    
    return (
        <Subscribers users={props.users} getUsers={getUsers}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        users: state.subscribersPage.users,
        isFetching:  state.subscribersPage.isFetching
    })
}

export default connect(mapStateToProps, {getUsers})(SubscribersContainer);

//export default ProfileContainer;