import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { useGlobalContext } from '../../context/devsContext';
import { getCurrentProfile } from '../../context/actions/profile';

const Dashboard = () => {
    const { isAuth, profile, profileDispatch } = useGlobalContext();

    useEffect(() => {
        console.log('useEffect: ');
        getCurrentProfile()(profileDispatch);
    }, []);

    return (
        <Grid container>
            <Grid item>Dashboard temporarly empty</Grid>
        </Grid>
    );
};

export default Dashboard;
