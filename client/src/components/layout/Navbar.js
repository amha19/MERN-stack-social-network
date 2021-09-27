import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link, Grid } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import { Link as RouterLink } from 'react-router-dom';

import { useGlobalContext } from '../../context/devsContext';
import { logout } from '../../context/actions/auth';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '165px',
        '&:hover': {
            color: 'rgb(16, 113, 128)',
            cursor: 'pointer',
            transition: '200ms',
        },
        '& p': {
            fontSize: '1.2rem',
        },
    },
    linkGroup: {
        width: 'auto',
        '& a': {
            '&:hover': {
                color: 'rgb(16, 113, 128)',
                cursor: 'pointer',
                transition: '200ms',
            },
        },
        '& > *': {
            marginLeft: theme.spacing(2),
        },
        fontSize: '1rem',
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const { isLoading, isAuth, authDispatch, profileDispatch } =
        useGlobalContext();

    return (
        <AppBar>
            <Toolbar>
                <Grid className={classes.title}>
                    <Link
                        className={classes.link}
                        component={RouterLink}
                        to="/"
                        variant="inherit"
                        color="inherit"
                        underline="none"
                    >
                        <DeveloperModeIcon />
                        <Typography>DevConnector</Typography>
                    </Link>
                </Grid>
                {!isAuth && (
                    <Grid item container className={classes.linkGroup}>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            component={RouterLink}
                            to="/profiles"
                        >
                            <Typography>Developers</Typography>
                        </Link>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            style={{ display: 'inherit' }}
                            component={RouterLink}
                            to="/register"
                        >
                            <Typography>Register</Typography>
                        </Link>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            style={{ display: 'inherit' }}
                            component={RouterLink}
                            to="/login"
                        >
                            <Typography>Login</Typography>
                        </Link>
                    </Grid>
                )}
                {isAuth && !isLoading && (
                    <Grid item container className={classes.linkGroup}>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            style={{ display: 'inherit' }}
                            component={RouterLink}
                            to="/profiles"
                        >
                            <Typography>Developers</Typography>
                        </Link>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            style={{ display: 'inherit' }}
                            component={RouterLink}
                            to="/dashboard"
                        >
                            <Typography>Dashboard</Typography>
                        </Link>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            onClick={() =>
                                logout()(authDispatch, profileDispatch)
                            }
                            style={{ display: 'inherit' }}
                        >
                            <Typography>Logout</Typography>
                        </Link>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
