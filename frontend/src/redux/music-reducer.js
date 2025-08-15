//Consts of actions
const SET_MUSIC = 'SET_MUSIC';

//Initial state
let initialState = {
    music: [
        { id: 1, name: 'Music 1', duration: '2:00' },
        { id: 2, name: 'Music 2', duration: '2:30' },
        { id: 3, name: 'Music 3', duration: '3:00' },
    ]
};

//Reducer
const musicReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MUSIC: {
            return { ...state, music: action.music }
        }

        default:
            return state;
    }
}

//Action creators
export const setMusic = (music) => ({ type: SET_MUSIC, music });

//Thunks
/*export const getMusic = (music) => async (dispatch) => {
    const response = await usersAPI.getProfile(music);
    dispatch(setUserProfile(response.data));
};*/

//Export music reducer
export default musicReducer;