import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

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

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link
            component={RouterLink}
            to="/"
            variant="inherit"
            color="inherit"
            underline="none"
          >
            {'</>'} DevConnector
          </Link>
        </Typography>
        <Typography className={classes.linkGroup}>
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
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
