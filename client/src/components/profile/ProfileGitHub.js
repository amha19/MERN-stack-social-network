import React, { useEffect } from 'react';
import {
    Grid,
    LinearProgress,
    makeStyles,
    Typography,
    Link,
    Chip,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useGlobalContext } from '../../context/devsContext';
import { getUserRepos } from '../../context/actions/profile';

const useStyles = makeStyles((theme) => ({
    repoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1, 0, 3, 0),
    },
    singleRepo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #bfbfbf',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    chips: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& div': {
            marginBottom: theme.spacing(0.4),
            borderRadius: 4,
            width: 100,
        },
    },
    stars: {},
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
            <Typography
                variant="h3"
                color="primary"
                style={{ marginBottom: 16 }}
            >
                GitHub Repos
            </Typography>
            {repos.map((repo) => (
                <Grid
                    item
                    container
                    className={classes.singleRepo}
                    key={repo.id}
                >
                    <Grid style={{ maxWidth: '50%' }}>
                        <Link
                            variant="inherit"
                            color="inherit"
                            underline="none"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Typography color="primary" gutterBottom>
                                {repo.name}
                            </Typography>
                        </Link>
                        <Typography>
                            {repo.description
                                ? repo.description
                                : 'No Description'}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.chips}>
                        <Chip
                            color="primary"
                            label={`Stars: ${repo.stargazers_count}`}
                        />
                        <Chip
                            color="secondary"
                            label={`Watchers: ${repo.watchers_count}`}
                        />
                        <Chip
                            color="default"
                            label={`Forks: ${repo.forks_count}`}
                        />
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProfileGitHub;
