import {postsAPI} from "../api/api";

//Consts of actions
const SET_POSTS = 'SET_POSTS';

//Initial state
let initialState = {
    posts: []
};

//Reducer
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.posts };

        default:
            return state;
    }
};

//Action creators
export const setPosts = (posts) => ({ type: SET_POSTS, posts });

//Thunks
export const getPosts = () => async (dispatch) => {
    const response = await postsAPI.getPosts();
    dispatch(setPosts(response.data.posts));
};

//Export posts reducer
export default postsReducer;