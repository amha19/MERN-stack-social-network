import React from 'react';
import { Grid, Typography, makeStyles, Button, Link } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField as MikTextField } from 'formik-material-ui';
import PersonIcon from '@material-ui/icons/Person';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import * as Yup from 'yup';

import { useGlobalContext } from '../../context/devsContext';
// import { setAlert, removeAlert } from '../../context/actions/alert';
import { register } from '../../context/actions/auth';

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

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6).required('Required'),
  password2: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

const Register = () => {
  const classes = useStyle();
  const { alertDispatch, authDispatch, isAuth } = useGlobalContext();

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

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
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password2: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            const { name, email, password } = values;
            setTimeout(() => {
              setSubmitting(false);
              const formData = { name, email, password };
              register(formData)(authDispatch, alertDispatch); // alert dispatch can be removed
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={MikTextField}
                id="outlined-name"
                name="name"
                label="Name"
                type="text"
                variant="outlined"
                required
              />
              <Field
                component={MikTextField}
                id="outlined-email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              <small>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
              <Field
                component={MikTextField}
                id="outlined-password-input"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              <Field
                component={MikTextField}
                name="password2"
                id="outlined-password2-input"
                label="Confirm Password"
                type="password"
                variant="outlined"
                required
              />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
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
