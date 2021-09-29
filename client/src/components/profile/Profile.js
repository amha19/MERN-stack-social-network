import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/devsContext';
import { getProfileById } from '../../context/actions/profile';
import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Profile = ({ match }) => {
    const {
        params: { userId },
    } = match;
    const { profileDispatch, profile, error, isAuth, user } =
        useGlobalContext();
    const history = useHistory();

    useEffect(() => {
        getProfileById(userId)(profileDispatch);
        console.log('come here?');
    }, [profileDispatch, userId]);

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
            <Button
                color="primary"
                variant="contained"
                onClick={() => history.push('/profiles')}
            >
                Back To Profiles
            </Button>
            {isAuth && userId === user.user._id && (
                <Button
                    color="default"
                    variant="contained"
                    style={{ textTransform: 'capitalize' }}
                    onClick={() => history.push('/edit-profile')}
                >
                    Edit Profile
                </Button>
            )}
        </Grid>
    );
};

export default Profile;
