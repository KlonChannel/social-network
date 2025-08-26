import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Editor from './Editor';
import { updateUserInfo } from '../../redux/profile-reducer';
import { getIsAuth, getLogin, getUserId } from '../../redux/selectors/auth-selectors';
import { getEditMode } from '../../redux/selectors/profile-selectors';
import { getProfile } from '../../redux/selectors/profile-selectors';

const EditorContainer = (props) => {
    const updateUserInfo = (id, surname, name, city, profession, email, vk, telegram, about) => {
        props.updateUserInfo(id, surname, name, city, profession, email, vk, telegram, about)
    }

    if (props.isAuth) {
        if (props.isEdit) {
            return (
                <Editor id={props.id} updateUserInfo={updateUserInfo} profile={props.profile} />
            )
        }
        
        return (
            <Navigate to={`/profile/${props.id}`} />
        )
    } else {
        return (
            <Navigate to={'/login'} />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state),
        login: getLogin(state),
        id: getUserId(state),
        isEdit: getEditMode(state),
        profile: getProfile(state)
    })
}

export default connect(mapStateToProps, { updateUserInfo })(EditorContainer);