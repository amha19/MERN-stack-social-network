import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/devsContext';
import { getProfiles } from '../../context/actions/profile';
import ProfileItem from './ProfileItem';
import { LinearProgress, Typography, Grid } from '@material-ui/core';

const Profiles = () => {
    const { profileDispatch, profiles, profileLoading } = useGlobalContext();

    useEffect(() => {
        getProfiles()(profileDispatch);
    }, [profileDispatch]);

    if (profileLoading) return <LinearProgress />;

    return (
        <Grid container direction="column" alignContent="center">
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
