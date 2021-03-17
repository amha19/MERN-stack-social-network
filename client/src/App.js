import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Error from './components/layout/Error';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import { theme } from './themes/theme';
import CreateProfile from './components/profile-form/CreateProfile';

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
                                    <PrivateRoute
                                        path="/create-profile"
                                        component={CreateProfile}
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
