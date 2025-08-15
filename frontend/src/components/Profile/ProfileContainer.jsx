import React, { useState, useEffect } from 'react';
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';

import Profile from './Profile';

const ProfileContainer = (props) => {
    useEffect(() => {
        refreshProfile();
    }, [])

    const refreshProfile = () => {
        props.getUserProfile();
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
        profile: state.profilePage.profile
    })
}

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);

//export default ProfileContainer;