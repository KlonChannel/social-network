import profilePhoto from '../assets/profile.png';

//Consts of actions


//Initial state
let initialState = {
    users: [
        { id: 1, surname: 'Drozdov', name: 'Nikita', photo: profilePhoto, city: 'Smolensk' },
        { id: 2, surname: 'Surname', name: 'Name', photo: profilePhoto, city: 'None' },
        { id: 3, surname: 'Viktorov', name: 'Viktor', photo: profilePhoto, city: 'Moscow' }
    ]
};

//Reducer
const subscribersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Action creators


//Export subscribers reducer
export default subscribersReducer;