import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useGlobalContext } from '../../context/devsContext';
import { removeAlert } from '../../context/actions/alert';

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      minWidth: 600,
      justifyContent: 'center',
    },
  },
}));

const AlertComp = () => {
  const { alertState, alertDispatch } = useGlobalContext();
  const classes = useStyle();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()(alertDispatch);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [alertDispatch]);

  return (
    <Grid className={classes.root}>
      {alertState.length > 0 &&
        alertState.map((alert, index) => (
          <Alert key={index} severity={alert.alertType}>
            {alert.msg}
          </Alert>
        ))}
    </Grid>
  );
};

export default AlertComp;
