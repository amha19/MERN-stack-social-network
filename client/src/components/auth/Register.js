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
import { actionTypes } from '../../context/actions/types';

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

const Register = () => {
  const classes = useStyle();
  const { dispatch } = useGlobalContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SET_ALERT, payload: 'Working?' });
  };
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center">
        <Typography variant="h2" color="primary">
          Sign Up
        </Typography>
        <div
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <PersonIcon />
          <Typography variant="h5">Create Your Account</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            type="text"
            required
          />
          <TextField
            id="outlined-email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="text"
            required
          />
          <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          <TextField
            id="outlined-password-input"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            required
          />
          <TextField
            id="outlined-password2-input"
            label="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Typography variant="subtitle1">
          Already have an account?{' '}
          <Link component={RouterLink} to="/login">
            Sign In
          </Link>
        </Typography>
      </Grid>
    </div>
  );
};

export default Register;
