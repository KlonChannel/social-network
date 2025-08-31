import { profileAPI, usersAPI } from "../api/api";

//Consts of actions
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_EDIT_MODE = 'SET_EDIT_MODE ';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

//Initial state
let initialState = {
    profile: {},
    isEdit: true
};


//Reducer
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_EDIT_MODE:
            return { ...state, isEdit: action.isEdit }
        
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photo: action.photo } }
        }

        default:
            return state;
    }
}

//Action creators
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setEditMode = (isEdit) => ({ type: SET_EDIT_MODE, isEdit })
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo });

//Thunks
export const getUserProfile = (id) => async (dispatch) => {
    const response = await usersAPI.getProfile(id);
    dispatch(setUserProfile(response.data.profile));
    dispatch(setEditMode(true));
};

export const updateUserInfo = (id, surname, name, city, profession, email, vk, telegram, about) => async (dispatch) => {
    const response = await profileAPI.updateProfile(id, surname, name, city, profession, email, vk, telegram, about);

    if (response.data === 'SUCCESS') {
        dispatch(setEditMode(false));
    } else {
        dispatch(setEditMode(true));
    }
};

export const savePhoto = (file, id) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file, id);

    /*if (response.data === 'SUCCESS') {
        ;
    } else {
        dispatch(setEditMode(true));
    }*/
}

//Export profile reducer
export default profileReducer;