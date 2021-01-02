import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Button,
  Link,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Link as RouterLink } from 'react-router-dom';

import { useGlobalContext } from '../../context/devsContext';
import { setAlert } from '../../context/actions/alert';

const useStyle = makeStyles((theme) => ({
  root: {
    '& h5': {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    '& h2': {
      marginTop: theme.spacing(4),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 600,
    '& > small': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(4),
    },
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const Login = () => {
  const classes = useStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { alertDispatch } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert('login sccessfully', 'success')(alertDispatch);
  };
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center">
        <Typography variant="h2" color="primary">
          Sign In
        </Typography>
        <div
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <PersonIcon />
          <Typography variant="h5">Login into Your Account</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="outlined-email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="text"
            required
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Typography variant="subtitle1">
          Don't have an account?{' '}
          <Link component={RouterLink} to="/register">
            Sign Up
          </Link>
        </Typography>
      </Grid>
    </div>
  );
};

export default Login;
