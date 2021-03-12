import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Error from './components/layout/Error';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layout/Layout';

const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: '3rem',
        },
        h5: {
            fontSize: '1.25rem',
        },
    },
    palette: {
        primary: {
            main: '#17a2b8',
        },
        secondary: {
            main: 'rgb(197,208,222)',
        },
        background: {
            default: 'rgb(247, 247, 247)',
        },
    },
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <Grid container direction="column">
                        <Grid item>
                            <Layout>
                                <Switch>
                                    <Route exact path="/" component={Landing} />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <PrivateRoute
                                        path="/dashboard"
                                        component={Dashboard}
                                    />
                                    <Route path="*" component={Error} />
                                </Switch>
                            </Layout>
                        </Grid>
                    </Grid>
                </BrowserRouter>
            </CssBaseline>
        </MuiThemeProvider>
    );
};

export default App;
