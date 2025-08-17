import { usersAPI } from "../api/api";

//Consts of actions
const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';

//Initial state
let initialState = {
    dialogs: [],

    messages: []
};

//Reducer
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return { ...state, dialogs: action.dialogs };

        case SET_MESSAGES:
            return { ...state, messages: action.messages };

        default:
            return state;
    }
}

//Action creators
export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });
export const setMessages = (messages) => ({ type: SET_MESSAGES, messages });

//Thunks
export const getDialogs = () => async (dispatch) => {
    const response = await usersAPI.getUsers();
    dispatch(setDialogs(response.data.users));
};

export const getMessages = () => async (dispatch) => {
    const response = await usersAPI.getMessages();
    dispatch(setMessages(response.data.messages));
};

//Export messages reducer
export default messagesReducer;