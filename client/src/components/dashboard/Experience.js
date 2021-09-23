import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    button: {
        '&:hover': {
            backgroundColor: '#DC143C',
            color: '#fff',
        },
    },
    text: {
        margin: theme.spacing(5, 0, 3, 0),
        fontSize: '1.25rem',
    },
    tableHead: {
        backgroundColor: '#e6e6e6',
        '& th': {
            fontWeight: 600,
        },
    },
}));

const changeDateFormat = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

const Experience = ({ experience }) => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.text}>
                Experience Credentials
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell>Company</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {experience.map((exp) => (
                            <TableRow key={exp._id}>
                                <TableCell component="th" scope="exp">
                                    {exp.company}
                                </TableCell>
                                <TableCell align="right">
                                    {changeDateFormat(exp.from)}
                                </TableCell>
                                <TableCell align="right">
                                    {exp.to ? changeDateFormat(exp.to) : ' Now'}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Experience;
