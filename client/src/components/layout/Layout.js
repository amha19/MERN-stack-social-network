import React, { useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import { useGlobalContext } from '../../context/devsContext';
import { loadUser } from '../../context/actions/auth';
import Navbar from '../layout/Navbar';
import Alert from '../layout/Alert';

const Layout = ({ children }) => {
    const { isLoading, authDispatch, alertState } = useGlobalContext();

    const token = localStorage.getItem('token');

    useEffect(() => {
        loadUser()(authDispatch);
    }, [authDispatch]);

    if (token && isLoading) return <LinearProgress />;

    return (
        <>
            <Navbar />
            <Grid style={{ marginTop: '64px' }}>
                {alertState.length > 0 && <Alert />}
                {children}
            </Grid>
        </>
    );
};

export default Layout;
