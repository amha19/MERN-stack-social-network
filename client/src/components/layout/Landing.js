import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';

import Background from '../../img/showcase.jpg';

const useStyles = makeStyles((theme) => ({
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
    zIndex: theme.zIndex.appBar + 1,
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
    <Paper className={classes.paper}>
      <div className={classes.dark_overlay}>
        <div className={classes.landing_inner}>
          <Typography variant="h2" gutterBottom={true}>
            Developer Connector
          </Typography>
          <Typography variant="h5" gutterBottom={true}>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </Typography>
          <div className={classes.btns}>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
            <Button variant="contained" color="default">
              Login
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Landing;
