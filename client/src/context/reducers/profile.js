import * as actions from '../actions/types';

export const profileInitialState = {
    profile: null,
    profiles: [],
    pros: [],
    isLoading: true,
    error: {},
};

export const profileReducer = (state = profileInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.GET_PROFILE:
            return {
                ...state,
            };
        case actions.PROFILE_ERROR:
            return {
                ...state,
            };
        default:
            throw new Error('No action match dispatch');
    }
};
