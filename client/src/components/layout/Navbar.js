import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link, Grid } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link as RouterLink } from 'react-router-dom';

import { useGlobalContext } from '../../context/devsContext';
import { logout } from '../../context/actions/auth';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  linkGroup: {
    '& a': {
      '&:hover': {
        color: 'rgb(16, 113, 128)',
      },
    },
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    fontSize: '1rem',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { isLoading, isAuth, authDispatch } = useGlobalContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          className={classes.title}
          component={RouterLink}
          to="/"
          variant="inherit"
          color="inherit"
          underline="none"
        >
          <Grid container>
            <Grid item>
              <DeveloperModeIcon />
            </Grid>
            <Grid item>
              <Typography variant="h6"> DevConnector</Typography>
            </Grid>
          </Grid>
        </Link>

        <Typography className={classes.linkGroup}>
          {!isAuth && (
            <>
              <Link
                color="inherit"
                variant="inherit"
                underline="none"
                component={RouterLink}
                to="/"
              >
                Developers
              </Link>
              <Link
                color="inherit"
                variant="inherit"
                underline="none"
                component={RouterLink}
                to="/register"
              >
                Register
              </Link>
              <Link
                color="inherit"
                variant="inherit"
                underline="none"
                component={RouterLink}
                to="/login"
              >
                Login
              </Link>
            </>
          )}
          {isAuth && !isLoading && (
            <Link
              color="inherit"
              variant="inherit"
              underline="none"
              onClick={() => logout()(authDispatch)}
            >
              <Grid container>
                <Grid item>
                  <ExitToAppIcon />
                </Grid>
                <Grid item> Logout</Grid>
              </Grid>
            </Link>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
