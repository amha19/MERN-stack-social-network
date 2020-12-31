import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import Background from '../../img/showcase.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& a': {
      textDecoration: 'none',
    },
  },
  paper: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    borderRadius: 0,
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    height: '100vh',
  },
  dark_overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  landing_inner: {
    color: '#fff',
    height: '100%',
    width: '100%',
    maxWidth: '70%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btns: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.dark_overlay}>
          <div className={classes.landing_inner}>
            <Typography variant="h2" gutterBottom>
              Developer Connector
            </Typography>
            <Typography variant="h5" gutterBottom>
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </Typography>
            <div className={classes.btns}>
              <RouterLink to="/register">
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
              </RouterLink>
              <RouterLink to="/login">
                <Button variant="contained" color="default">
                  Login
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Landing;
