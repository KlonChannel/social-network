import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {thunk} from 'redux-thunk';

import profileReducer from './profile-reducer';
import subscribersReducer from './subscribers-reducer';
//import postsReducer from './posts-reducer';
//import messagesReducer from './messages-reducer';
//import musicReducer from './music-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    subscribersPage: subscribersReducer
    //postsPage: postsReducer,
    //messagesPage: messagesReducer,
    //musicPage: musicReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;