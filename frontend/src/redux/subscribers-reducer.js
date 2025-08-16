import profilePhoto from '../assets/profile.png';
import {usersAPI} from "../api/api";

//Consts of actions
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//Initial state
let initialState = {
    users: []
};

//Reducer
const subscribersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users }
        
        default:
            return state;
    }
};

//Action creators
export const setUsers = (users) => ({ type: SET_USERS, users });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

//Thunks
export const getUsers = (type) => async (dispatch) => {
    const response = await usersAPI.getUsers(type);
    dispatch(setUsers(response.data.users));
};

//Export subscribers reducer
export default subscribersReducer;