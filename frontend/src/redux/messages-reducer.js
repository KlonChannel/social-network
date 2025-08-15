//Consts of actions
const SEND_MESSAGE = 'SEND_MESSAGE';

//Initial state
let initialState = {
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
};

//Reducer
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageBody, authorId: 1 }]
            };
        default:
            return state;
    }
}

//Action creators
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

//Export messages reducer
export default messagesReducer;