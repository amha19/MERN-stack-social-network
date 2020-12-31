import React, { useContext, useReducer } from 'react';

import { alertReducer, alertInitialState } from './reducers/alert';

const AppContext = React.createContext({
  isLoading: true,
  alertDispatch: () => {},
});

const initialState = {
  isLoading: true,
  name: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      console.log(action.payload);
      return { ...state, name: action.payload };
    default:
      throw new Error('No action match dispatch');
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    alertInitialState
  );

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, ...alertState, alertDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
