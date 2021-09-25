import * as actions from '../actions/types';

export const authInitialState = {
    isLoading: true,
    token: localStorage.getItem('token'),
    isAuth: false,
    user: null,
};

export const authReducer = (state = authInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.REGISTER_SUCCESS:
        case actions.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuth: true,
                isLoading: false,
            };
        case actions.USER_LOADED:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                user: payload,
            };
        case actions.REGISTER_FAIL:
        case actions.AUTH_ERROR:
        case actions.LOGIN_FAIL:
        case actions.LOGOUT:
        case actions.DELETE_ACCOUNT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                isLoading: true,
            };
        default:
            throw new Error('No action match dispatch');
    }
};
