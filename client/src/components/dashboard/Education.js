import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { deleteEducation } from '../../context/actions/profile';
import { useGlobalContext } from '../../context/devsContext';

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

const Education = ({ education }) => {
    const classes = useStyles();
    const { profileDispatch, alertDispatch } = useGlobalContext();

    return (
        <>
            <Typography variant="h5" className={classes.text}>
                Education Credentials
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell>School</TableCell>
                            <TableCell>Degree</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {education.map((educ) => (
                            <TableRow key={educ._id}>
                                <TableCell component="th" scope="educ">
                                    {educ.school}
                                </TableCell>
                                <TableCell>{educ.degree}</TableCell>
                                <TableCell align="right">
                                    {changeDateFormat(educ.from)}
                                </TableCell>
                                <TableCell align="right">
                                    {educ.to
                                        ? changeDateFormat(educ.to)
                                        : ' Now'}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={() =>
                                            deleteEducation(educ._id)(
                                                profileDispatch,
                                                alertDispatch
                                            )
                                        }
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

export default Education;
