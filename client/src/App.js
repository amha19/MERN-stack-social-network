import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const theme = createMuiTheme({
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
        <Grid container direction="column">
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item>
            <Landing />
          </Grid>
        </Grid>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
