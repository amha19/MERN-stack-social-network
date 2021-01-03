import React, { useContext, useReducer } from 'react';

import { alertReducer, alertInitialState } from './reducers/alert';
import { authReducer, authInitialState } from './reducers/auth';

const AppContext = React.createContext({
  isLoading: true,
  alertDispatch: () => {},
  authDispatch: () => {},
});

const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    alertInitialState
  );

  return (
    <AppContext.Provider
      value={{ ...authState, authDispatch, alertState, alertDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
