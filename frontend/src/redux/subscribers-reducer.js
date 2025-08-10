let initialState = {
    users: [
        { id: 1, surname: 'Drozdov', name: 'Nikita', photo: profilePhoto, city: 'Smolensk' },
        { id: 2, surname: 'Surname', name: 'Name', photo: profilePhoto, city: 'None' },
        { id: 3, surname: 'Viktorov', name: 'Viktor', photo: profilePhoto, city: 'Moscow' }
    ]
};

const subscribersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default subscribersReducer;