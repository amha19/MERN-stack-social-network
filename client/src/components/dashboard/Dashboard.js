import React, { useEffect } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';

import { useGlobalContext } from '../../context/devsContext';
import { getCurrentProfile } from '../../context/actions/profile';

const Dashboard = () => {
    const {
        profileLoading,
        isAuth,
        profile,
        profileDispatch,
    } = useGlobalContext();

    useEffect(() => {
        getCurrentProfile()(profileDispatch);
        // eslint-disable-next-line
    }, []);

    if (profileLoading) return <LinearProgress />;

    return (
        <Grid container>
            <Grid item>Dashboard</Grid>
        </Grid>
    );
};

export default Dashboard;
