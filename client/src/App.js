import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Error from './components/layout/Error';

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
              <Navbar />
            </Grid>
            <Grid item>
              <Alert />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="*" component={Error} />
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
