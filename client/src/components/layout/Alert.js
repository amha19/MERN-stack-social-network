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
  const { show, msg, alertType, alertDispatch } = useGlobalContext();
  const classes = useStyle();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()(alertDispatch);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show, alertDispatch]);

  return (
    <Grid className={classes.root}>
      {show ? <Alert severity={alertType}>{msg}</Alert> : null}
    </Grid>
  );
};

export default AlertComp;
