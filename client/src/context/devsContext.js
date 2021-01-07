import React, { useContext, useReducer, createContext } from 'react';

import { alertReducer, alertInitialState } from './reducers/alert';
import { authReducer, authInitialState } from './reducers/auth';

export const AppContext = createContext({
  isLoading: true,
  alertState: [],
  alertDispatch: () => {},
  authDispatch: () => {},
});

const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    alertInitialState
  );

  const value = {
    ...authState,
    authDispatch,
    alertState,
    alertDispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
