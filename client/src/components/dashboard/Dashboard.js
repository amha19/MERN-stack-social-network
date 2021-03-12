import React, { useEffect } from 'react';
import { Grid, LinearProgress, Typography, Button } from '@material-ui/core';
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
                    <>
                        <Typography>
                            You have not yet setup a profile, please add some
                            info
                        </Typography>
                        <Button>Create Profile</Button>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
