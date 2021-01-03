import * as actions from '../actions/types';

export const alertInitialState = [];

export const alertReducer = (state = alertInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_ALERT:
      return [...state, payload];
    case actions.REMOVE_ALERT:
      return [];
    default:
      throw new Error('No action match dispatch');
  }
};
