import {usersAPI} from "../api/api";

//Consts of actions
const SET_DIALOGS = 'SET_DIALOGS';

//Initial state
let initialState = {
    dialogs: [],

    messages: [
        { id: 1, text: 'Hello', authorId: 2 },
        { id: 2, text: 'Hello! Hello!', authorId: 1 },
        { id: 3, text: 'How are you?', authorId: 1 }
    ]
};

//Reducer
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return { ...state, dialogs: action.dialogs };

        default:
            return state;
    }
}

//Action creators
export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });

//Thunks
export const getDialogs = () => async (dispatch) => {
    const response = await usersAPI.getUsers();
    dispatch(setDialogs(response.data.users));
};

//Export messages reducer
export default messagesReducer;