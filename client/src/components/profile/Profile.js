import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../context/devsContext';
import { getProfileById } from '../../context/actions/profile';
import { Button, Grid, LinearProgress, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ProfileTop from './ProfileTop';

const useStyles = makeStyles((theme) => ({
    btnContainer: {
        padding: theme.spacing(3, 0),
        width: '100%',
    },
}));

const Profile = ({ match }) => {
    const classes = useStyles();

    const {
        params: { userId },
    } = match;
    const { profileDispatch, profile, error, isAuth, user } =
        useGlobalContext();
    const history = useHistory();

    useEffect(() => {
        getProfileById(userId)(profileDispatch);
    }, [profileDispatch, userId]);

    if (!profile) return <LinearProgress />;
    if (Object.keys(error).length > 0)
        return (
            <Alert severity="error">
                Something went wrong while fetching profile.
            </Alert>
        );

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item sm={8} xs={12} className={classes.btnContainer}>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 16 }}
                    onClick={() => history.push('/profiles')}
                >
                    Back To Profiles
                </Button>
                {isAuth && userId === user.user._id && (
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{ textTransform: 'capitalize' }}
                        onClick={() => history.push('/edit-profile')}
                    >
                        Edit Profile
                    </Button>
                )}
            </Grid>
            <ProfileTop profile={profile} />
        </Grid>
    );
};

export default Profile;
