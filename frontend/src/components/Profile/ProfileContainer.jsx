import React, { useState, useEffect } from 'react';
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {getProfile} from '../../redux/selectors/profile-selectors';

import Profile from './Profile';
import { useParams } from 'react-router-dom';

const ProfileContainer = (props) => {
    const { id } = useParams();

    useEffect(() => {
        refreshProfile(id);
    }, [])

    const refreshProfile = (id) => {
        props.getUserProfile(id);
    }
    
    return (
        <Profile surname={props.profile.surname}
                 name={props.profile.name} 
                 city={props.profile.city}
                 profession={props.profile.profession}
                 email={props.profile.email}
                 vk={props.profile.vk}
                 telegram={props.profile.telegram}
                 about={props.profile.about}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        profile: getProfile(state)
    })
}

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);

//export default ProfileContainer;