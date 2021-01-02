import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Grid
      style={{ marginTop: 16 }}
      container
      direction="column"
      alignItems="center"
    >
      <Typography variant="h3">oops! it's a dead end</Typography>
      <Link to="/">Back Home</Link>
    </Grid>
  );
};

export default Error;
