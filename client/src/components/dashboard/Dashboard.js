import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    LinearProgress,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { useGlobalContext } from '../../context/devsContext';
import { getCurrentProfile } from '../../context/actions/profile';
import DashboardActions from './DashboardActions';

const useStyle = makeStyles((theme) => ({
    dashboard: {
        padding: theme.spacing(4, 1, 2, 1),
    },
    subTitle: {
        margin: theme.spacing(2, 0),
        '& h5': {
            marginLeft: 6,
        },
    },
    createProBtn: {
        width: 200,
        marginTop: theme.spacing(3),
    },
}));

const Dashboard = () => {
    const classes = useStyle();
    const history = useHistory();
    const { profileLoading, profile, user, profileDispatch } =
        useGlobalContext();

    useEffect(() => {
        getCurrentProfile()(profileDispatch);
    }, [profileDispatch]);

    if (profileLoading) return <LinearProgress />;

    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid
                item
                container
                md={8}
                direction="column"
                className={classes.dashboard}
            >
                <Grid item>
                    <Typography color="primary" variant="h2">
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item container className={classes.subTitle}>
                    <PersonIcon />
                    <Typography variant="h5">
                        Welcome {user && user.user.name}
                    </Typography>
                </Grid>
                <Grid item container direction="column">
                    {profile ? (
                        <DashboardActions />
                    ) : (
                        <>
                            <Typography>
                                You have not yet setup a profile, please add
                                some info
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.createProBtn}
                                onClick={() => history.push('/create-profile')}
                            >
                                Create Profile
                            </Button>
                        </>
                    )}
                </Grid>
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
    );
};

export default Dashboard;
