import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button, SvgIcon, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Experience from './Experience';
import { useGlobalContext } from '../../context/devsContext';
import Education from './Education';
import { deleteAccount } from '../../context/actions/profile';

const useStyles = makeStyles((theme) => ({
    btnContainer: {
        '& > *': {
            marginRight: 12,
            textTransform: 'capitalize',
            fontSize: '1rem',
        },
    },
    deleteBtn: {
        marginTop: theme.spacing(4),
        textTransform: 'capitalize',
        fontSize: '.75rem',
        '&:hover': {
            backgroundColor: '#DC143C',
            color: '#FFF',
        },
    },
}));

const PinIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
        </SvgIcon>
    );
};

const GraduationIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </SvgIcon>
    );
};

const DashboardActions = () => {
    const classes = useStyles();
    const history = useHistory();
    const { profile, authDispatch, profileDispatch, alertDispatch } =
        useGlobalContext();
    const { experience, education } = profile;

    return (
        <>
            <Grid className={classes.btnContainer}>
                <Button
                    startIcon={<AccountCircleIcon color="primary" />}
                    color="default"
                    variant="contained"
                    onClick={() => history.push('/edit-profile')}
                >
                    Edit Profile
                </Button>
                <Button
                    startIcon={<PinIcon color="primary" />}
                    color="default"
                    variant="contained"
                    onClick={() => history.push('/add-experience')}
                >
                    Add Experience
                </Button>
                <Button
                    startIcon={<GraduationIcon color="primary" />}
                    color="default"
                    variant="contained"
                    onClick={() => history.push('/add-education')}
                >
                    Add Education
                </Button>
            </Grid>
            <Grid>
                {experience.length !== 0 && (
                    <Experience experience={experience} />
                )}
                {education.length !== 0 && <Education education={education} />}
            </Grid>
            <Grid>
                <Button
                    className={classes.deleteBtn}
                    variant="contained"
                    startIcon={<AccountCircleIcon color="primary" />}
                    onClick={() =>
                        deleteAccount()(
                            profileDispatch,
                            authDispatch,
                            alertDispatch
                        )
                    }
                >
                    delete my account
                </Button>
            </Grid>
        </>
    );
};

export default DashboardActions;
