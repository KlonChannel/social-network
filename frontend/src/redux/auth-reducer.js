import {authAPI, usersAPI} from "../api/api";

//Consts of actions
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_LOGIN_BUSY = 'SET_LOGIN_BUSY';
const SET_USER_ID = 'SET_USER_ID';

//Initial state
let initialState = {
    isAuth: false,
    id: null,
    login: null,
    isLoginBusy: false
};


//Reducer
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_STATUS:
            return { ...state, isAuth: action.isAuth }

        case SET_USER_LOGIN:
            return { ...state, login: action.login }

        case SET_LOGIN_BUSY:
            return { ...state, isLoginBusy: action.isLoginBusy }

        case SET_USER_ID:
            return { ...state, id: action.id }

        default:
            return state;
    }
}

//Action creators
export const setAuthStatus = (isAuth) => ({ type: SET_AUTH_STATUS, isAuth });
export const setUserLogin = (login) => ({type: SET_USER_LOGIN, login});
export const setLoginBusy = (isLoginBusy) => ({type: SET_LOGIN_BUSY, isLoginBusy});
export const setUserId = (id) => ({type: SET_USER_ID, id});


//Thunks
export const registration = (login, password) => async (dispatch) => {
    const response = await authAPI.registration(login, password);
    
    if (response.data === 'SUCCESS') {
        dispatch(setLoginBusy(false));
        dispatch(setUserLogin(login));
        
        const idData = await usersAPI.getId(login);

        dispatch(setUserId(idData.data));
        dispatch(setAuthStatus(true));
    } else {
        dispatch(setLoginBusy(true));
    }
};

//Export profile reducer
export default authReducer;