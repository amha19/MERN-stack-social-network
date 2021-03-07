import React, { useContext, useReducer, createContext } from 'react';

import { alertReducer, alertInitialState } from './reducers/alert';
import { authReducer, authInitialState } from './reducers/auth';
import { profileReducer, profileInitialState } from './reducers/profile';

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
    const [profileState, profileDispatch] = useReducer(
        profileReducer,
        profileInitialState
    );

    const value = {
        ...authState,
        authDispatch,
        alertState,
        alertDispatch,
        ...profileState,
        profileDispatch,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
