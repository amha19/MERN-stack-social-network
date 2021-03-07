import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { useGlobalContext } from '../../context/devsContext';
import { getCurrentProfile } from '../../context/actions/profile';

const Dashboard = () => {
    const { isAuth, profile } = useGlobalContext();

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <Grid container>
            <Grid item>Dashboard</Grid>
        </Grid>
    );
};

export default Dashboard;
