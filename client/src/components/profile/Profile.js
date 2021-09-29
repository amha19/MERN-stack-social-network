import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/devsContext';
import { getProfileById } from '../../context/actions/profile';
import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Profile = ({ match }) => {
    const {
        params: { userId },
    } = match;
    const { profileDispatch, profile, error } = useGlobalContext();

    useEffect(() => {
        getProfileById(userId)(profileDispatch);
    }, [profileDispatch, userId]);

    console.log('error: ', error);

    if (!profile) return <LinearProgress />;
    if (Object.keys(error).length > 0)
        return (
            <Alert severity="error">
                Something went wrong while fetching profile.
            </Alert>
        );

    return (
        <Grid>
            <Typography>{profile.userId.name}</Typography>
            <Button color="primary" variant="contained">
                Back To Profiles
            </Button>
            <Button
                color="default"
                variant="contained"
                style={{ textTransform: 'capitalize' }}
            >
                Edit Profile
            </Button>
        </Grid>
    );
};

export default Profile;
