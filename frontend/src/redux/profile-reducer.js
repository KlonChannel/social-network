import {profileAPI, usersAPI} from "../api/api";

//Consts of actions
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

//Initial state
let initialState = {
    profile: {}
};


//Reducer
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
    

        /*case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photo: action.photo } }
        }*/

        default:
            return state;
    }
}

//Action creators
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
//export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photo });

//Thunks
export const getUserProfile = () => async (dispatch) => {
    const response = await usersAPI.getProfile();
    dispatch(setUserProfile(response.data.profile));
};

/*export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}*/

//Export profile reducer
export default profileReducer;