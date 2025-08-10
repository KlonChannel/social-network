import profileReducer from './profile-reducer';
import subscribersReducer from './subscribers-reducer';
import postsReducer from './posts-reducer';
import messagesReducer from './messages-reducer';
import musicReducer from './music-reducer';

import profilePhoto from '../assets/profile.png';
import postPhoto from '../assets/Post.png';

let store = {
    //data in state
    _state: {
        profilePage: {
            profile: {
                id: 1,
                surname: 'Drozdov',
                name: 'Nikita',
                photo: profilePhoto,
                city: 'Moscow',
                profession: 'programmer',
                email: 'email@email.com',
                vk: 'https://vk.com/na.chille5',
                telegram: 'https://t.me/klonchannel',
                about: 'Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user. Some text about user.'
            }
        },

        subscribersPage: {
            users: [
                { id: 1, surname: 'Drozdov', name: 'Nikita', photo: profilePhoto, city: 'Smolensk' },
                { id: 2, surname: 'Surname', name: 'Name', photo: profilePhoto, city: 'None' },
                { id: 3, surname: 'Viktorov', name: 'Viktor', photo: profilePhoto, city: 'Moscow' }
            ]
        },

        postsPage: {
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
        },

        messagesPage: {
            dialogs: [
                { id: 1, surname: 'Drozdov', name: 'Nikita' },
                { id: 2, surname: 'Surname', name: 'Name' },
                { id: 3, surname: 'Viktorov', name: 'Viktor' }
            ],

            messages: [
                { id: 1, text: 'Hello', authorId: 2 },
                { id: 2, text: 'Hello! Hello!', authorId: 1 },
                { id: 3, text: 'How are you?', authorId: 1 }
            ]
        },

        musicPage: {
            music: [
                { id: 1, name: 'Music 1', duration: '2:00' },
                { id: 2, name: 'Music 2', duration: '2:30' },
                { id: 3, name: 'Music 3', duration: '3:00' },
            ]
        }
    },

    //subscriber notification
    _callSubscriber() {
        console.log('State changed');
    },

    //Get full state
    getState() {
        return this._state;
    },

    //subscribe on state change
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //action dispatch
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.subscribersPage = subscribersReducer(this._state.subscribersPage, action);

        this._state.postsPage = postsReducer(this._state.subscribersPage, action);
        
        this._state.messagesPage = messagesReducer(this._state.subscribersPage, action);

        this._state.musicPage = musicReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}


//export store and creating visibility for a window
export default store;
window.store = store;