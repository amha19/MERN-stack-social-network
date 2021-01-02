import * as actions from './types';

export const setAlert = (msg, alertType) => (dispatch) => {
  dispatch({
    type: actions.SET_ALERT,
    payload: { msg, alertType },
  });
};

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: actions.REMOVE_ALERT,
  });
};
