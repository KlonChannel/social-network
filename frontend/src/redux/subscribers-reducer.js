import {usersAPI} from "../api/api";

//Consts of actions
const SET_USERS = 'SET_USERS';

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

//Thunks
export const getUsers = (type, id) => async (dispatch) => {
    const response = await usersAPI.getUsers(type, id);
    dispatch(setUsers(response.data.users));
};

//Export subscribers reducer
export default subscribersReducer;