import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/devsContext';
import { getProfiles } from '../../context/actions/profile';
import ProfileItem from './ProfileItem';
import { LinearProgress, Typography } from '@material-ui/core';

const Profiles = () => {
    const { profileDispatch, profiles, profileLoading } = useGlobalContext();

    useEffect(() => {
        getProfiles()(profileDispatch);
    }, [profileDispatch]);

    if (profileLoading) return <LinearProgress />;

    return (
        <>
            {profiles.length > 0 ? (
                profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                ))
            ) : (
                <Typography>No Profile Yet</Typography>
            )}
        </>
    );
};

export default Profiles;
