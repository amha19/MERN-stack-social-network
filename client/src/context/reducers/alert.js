import * as actions from '../actions/types';

export const alertInitialState = {
  show: false,
  msg: '',
  alertType: '',
};

export const alertReducer = (state = alertInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_ALERT:
      return {
        show: true,
        msg: payload.msg,
        alertType: payload.alertType,
      };
    case actions.REMOVE_ALERT:
      return {
        show: false,
        msg: '',
        alertType: '',
      };
    default:
      throw new Error('No action match dispatch');
  }
};
