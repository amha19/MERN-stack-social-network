import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Typography,
    FormControl,
    Button,
    makeStyles,
    TextField,
    TextareaAutosize,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { updateProfile } from '../../context/actions/profile';
import { useGlobalContext } from '../../context/devsContext';

const useStyles = makeStyles((theme) => ({
    profileContainer: {
        padding: theme.spacing(4, 2),
    },
    headTitle: {
        marginBottom: 16,
    },
    lead: {
        alignItems: 'center',
        '& p': {
            marginLeft: 6,
            fontSize: '1.15rem',
        },
    },
    required: {
        margin: theme.spacing(2, 0, 0, 1),
        fontSize: '0.85rem',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        '& input': {
            padding: 12,
        },
    },
    btnContainer: {
        padding: '12px 0 8px 8px',
        marginTop: 8,
        '& button': {
            marginRight: 16,
        },
    },
}));

const AddExperience = () => {
    const classes = useStyles();
    const history = useHistory();

    const { profileDispatch, alertDispatch } = useGlobalContext();

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const { company, title, location, from, to, current, description } =
        formData;

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData, history)(profileDispatch, alertDispatch);
    };

    return (
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid
                item
                container
                direction="column"
                md={8}
                className={classes.profileContainer}
            >
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.headTitle}
                >
                    Add Experience
                </Typography>
                <Grid item container className={classes.lead}>
                    <PersonIcon />
                    <Typography>
                        Add any developer/programming positions that you had in
                        the past
                    </Typography>
                </Grid>
                <Typography className={classes.required}>
                    * = required field
                </Typography>
                <Grid item container>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="* Job Title"
                                name="title"
                                value={title}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="* Company"
                                name="company"
                                value={company}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="Location"
                                name="location"
                                value={location}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="mm/dd/yyyy"
                                name="from"
                                value={from}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            style={{ padding: '8px 12px' }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        variant="outlined"
                                        checked={current}
                                        name="current"
                                        value={current}
                                        onChange={(e) => {
                                            setFormData((prev) => ({
                                                ...formData,
                                                current: !prev.current,
                                            }));
                                        }}
                                    />
                                }
                                label="Current Job"
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="mm/dd/yyyy"
                                name="to"
                                value={to}
                                disabled={current ? true : false}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <TextareaAutosize
                                rowsMin={6}
                                placeholder="Job description"
                                name="description"
                                value={description}
                                onChange={(e) => onChangeHandler(e)}
                                style={{ padding: 12 }}
                            ></TextareaAutosize>
                        </FormControl>

                        <Grid item container className={classes.btnContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                variant="contained"
                                color="default"
                                onClick={() => history.push('/dashboard')}
                                style={{
                                    textTransform: 'capitalize',
                                    fontSize: '1rem',
                                }}
                            >
                                Go back
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
    );
};

export default AddExperience;
