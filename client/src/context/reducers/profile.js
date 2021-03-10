import * as actions from '../actions/types';

export const profileInitialState = {
    profile: null,
    profiles: [],
    pros: [],
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
                isLoading: false,
            };
        case actions.PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        default:
            throw new Error('No action match dispatch');
    }
};
