import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './alert';
import * as actions from './types';

export const loadUser = () => async (authDispatch) => {
  const token = localStorage.getItem('token');
  if (token) setAuthToken(token);
  try {
    const res = await axios.get('api/auth');

    authDispatch({
      type: actions.USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    authDispatch({
      type: actions.AUTH_ERROR,
    });
  }
};

export const register = (dataForm) => async (authDispatch, alertDispatch) => {
  try {
    const res = await axios.post('api/users', dataForm);

    authDispatch({ type: actions.REGISTER_SUCCESS, payload: res.data });

    loadUser()(authDispatch);
    setAlert('Registered successfully', 'success')(alertDispatch);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        setAlert(error.msg, 'error')(alertDispatch);
      });
    }
    authDispatch({ type: actions.REGISTER_FAIL });
  }
};

export const login = (email, password) => async (
  authDispatch,
  alertDispatch
) => {
  try {
    const res = await axios.post('api/auth', { email, password });

    authDispatch({ type: actions.LOGIN_SUCCESS, payload: res.data });

    loadUser()(authDispatch);
    setAlert('Logged in successfully', 'success')(alertDispatch);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        setAlert(error.msg, 'error')(alertDispatch);
      });
    }

    authDispatch({ type: actions.LOGIN_FAIL });
  }
};

export const logout = () => async (authDispatch) => {
  authDispatch({ type: actions.LOGOUT });
};
