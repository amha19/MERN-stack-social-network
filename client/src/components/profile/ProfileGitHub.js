import React, { useEffect } from 'react';
import {
    Grid,
    LinearProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useGlobalContext } from '../../context/devsContext';
import { getUserRepos } from '../../context/actions/profile';

const useStyles = makeStyles((theme) => ({
    repoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const ProfileGitHub = ({ username }) => {
    const classes = useStyles();
    const { profileDispatch, repos, error } = useGlobalContext();

    useEffect(() => {
        getUserRepos(username)(profileDispatch);
    }, [username, profileDispatch]);

    if (repos.length === 0) return <LinearProgress />;

    if (Object.keys(error).length > 0) {
        return (
            <Alert severity="error">
                Something went wrong while fetching user github repos.
            </Alert>
        );
    }

    return (
        <Grid item sm={8} xs={12} container className={classes.repoContainer}>
            {repos.map((repo) => (
                <Grid
                    item
                    style={{ width: '100%', border: '1px solid #bfbfbf' }}
                    key={repo.id}
                >
                    <Typography>{repo.name}</Typography>
                    <Typography>{repo.description}</Typography>
                    <Typography>{repo.stargazers_count}</Typography>
                    <Typography>{repo.watchers_count}</Typography>
                    <Typography>{repo.forks_count}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProfileGitHub;
