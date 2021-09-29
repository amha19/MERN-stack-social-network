import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/devsContext';
import { getProfiles } from '../../context/actions/profile';
import ProfileItem from './ProfileItem';
import {
    LinearProgress,
    Typography,
    Grid,
    makeStyles,
    Box,
} from '@material-ui/core';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';

const useStyles = makeStyles((theme) => ({
    header: {
        margin: theme.spacing(3, 0, 1, 3),
    },
}));

const Profiles = () => {
    const classes = useStyles();

    const { profileDispatch, profiles, profileLoading } = useGlobalContext();

    useEffect(() => {
        getProfiles()(profileDispatch);
    }, [profileDispatch]);

    if (profileLoading) return <LinearProgress />;

    return (
        <Grid container direction="column" alignContent="center">
            <Typography color="primary" variant="h2" className={classes.header}>
                Developers
            </Typography>
            <Box
                className={classes.subHeader}
                mb={1.5}
                ml={3}
                display="flex"
                flexDirection="row"
            >
                <SettingsInputSvideoIcon style={{ marginRight: 8 }} />
                <Typography variant="h5">
                    Browse and connect with developers
                </Typography>
            </Box>
            {profiles.length > 0 ? (
                profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                ))
            ) : (
                <Typography variant="h2">No Profile Yet</Typography>
            )}
        </Grid>
    );
};

export default Profiles;
