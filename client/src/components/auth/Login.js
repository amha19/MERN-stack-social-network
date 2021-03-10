import React from 'react';
import { Grid, Typography, makeStyles, Button, Link } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Formik, Form, Field } from 'formik';
import { TextField as MikTextField } from 'formik-material-ui';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import * as Yup from 'yup';

import { useGlobalContext } from '../../context/devsContext';
import { login } from '../../context/actions/auth';

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

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Login = () => {
    const classes = useStyle();
    const { authDispatch, alertDispatch, isAuth } = useGlobalContext();

    if (isAuth) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignContent="center"
            >
                <Typography variant="h2" color="primary">
                    Sign In
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <PersonIcon />
                    <Typography variant="h5">
                        Login into Your Account
                    </Typography>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        const { email, password } = values;
                        setTimeout(() => {
                            setSubmitting(false);
                            login(email, password)(authDispatch, alertDispatch);
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            <Field
                                component={MikTextField}
                                name="email"
                                type="email"
                                label="Email"
                                helperText="Please Enter Email"
                                variant="outlined"
                            />
                            <Field
                                component={MikTextField}
                                type="password"
                                label="Password"
                                name="password"
                                variant="outlined"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
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
