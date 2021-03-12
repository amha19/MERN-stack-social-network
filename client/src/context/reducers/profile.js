import * as actions from '../actions/types';

export const profileInitialState = {
    profile: null,
    profiles: [],
    repos: [],
    profileLoading: true,
    error: {},
};

export const profileReducer = (state = profileInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                profile: payload,
                profileLoading: false,
            };
        case actions.PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                profileLoading: false,
            };
        case actions.CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
            };
        default:
            throw new Error('No action match dispatch');
    }
};
