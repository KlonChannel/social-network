import postPhoto from '../assets/Post.png';

//Consts of actions
const ADD_POST = 'ADD-POST';

//Initial state
let initialState = {
    posts: [
        {
            id: 1, authorId: 3, date: '1/01/2024',
            text: 'Spam: 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            file: postPhoto,
            likesCount: 0
        },
        {
            id: 2, authorId: 2, date: '20/12/2024',
            text: 'Hello everyone!',
            file: postPhoto,
            likesCount: 3
        },
        {
            id: 3, authorId: 1, date: '1/01/2025',
            text: 'Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!! Aw, its my first post! Its so wonderful!!!',
            file: postPhoto,
            likesCount: 10
        }
    ]
};

//Reducer
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: action.newPostText,
                file: postPhoto,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        default:
            return state;
    }
};

//Action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

//Export posts reducer
export default postsReducer;