export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getLogin = (state) => {
    return state.auth.login;
};

export const getLoginBusy = (state) => {
    return state.auth.isLoginBusy;
};

export const getUserId = (state) => {
    return state.auth.id;
};

export const getAuthError = (state) => {
    return state.auth.authError;
};