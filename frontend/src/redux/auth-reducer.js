import {authAPI} from "../api/api";

//Consts of actions


//Initial state
let initialState = {
    
};


//Reducer
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        /*case SET_USER_PROFILE:
            return { ...state, profile: action.profile }*/

        default:
            return state;
    }
}

//Action creators
//export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


//Thunks
export const registration = (login, password) => async (dispatch) => {
    const response = await authAPI.registration(login, password);
};

//Export profile reducer
export default authReducer;