import { actionTypes } from '../actions/types';

export const alertInitialState = {
  isLoading: true,
  name: '',
  email: '',
};

export const alertReducer = (state = alertInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALERT:
      console.log(action.payload);
      return { ...state, name: action.payload };
    default:
      throw new Error('No action match dispatch');
  }
};
