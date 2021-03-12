import React, { useEffect } from 'react';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { useGlobalContext } from '../../context/devsContext';
import { getCurrentProfile } from '../../context/actions/profile';

const Dashboard = () => {
    const {
        profileLoading,
        profile,
        user,
        profileDispatch,
    } = useGlobalContext();

    useEffect(() => {
        getCurrentProfile()(profileDispatch);
    }, [profileDispatch]);

    if (profileLoading) return <LinearProgress />;

    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h2">Dashboard</Typography>
            </Grid>
            <Grid item container>
                <PersonIcon />
                <Typography color="primary" variant="body1">
                    Welcome {user && user.user.name}
                </Typography>
            </Grid>
            <Grid item container>
                {profile ? (
                    <>
                        <Typography>has</Typography>
                    </>
                ) : (
                    <>has not</>
                )}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
