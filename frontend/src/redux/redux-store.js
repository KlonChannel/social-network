import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';

import profileReducer from './profile-reducer';
import subscribersReducer from './subscribers-reducer';
import postsReducer from './posts-reducer';
import messagesReducer from './messages-reducer';
//import musicReducer from './music-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    subscribersPage: subscribersReducer,
    postsPage: postsReducer,
    messagesPage: messagesReducer,
    //musicPage: musicReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;