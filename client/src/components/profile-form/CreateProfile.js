import React, { useState } from 'react';
import {
    Grid,
    Typography,
    FormControl,
    Button,
    Select,
    MenuItem,
    makeStyles,
    FormLabel,
    TextField,
    FormHelperText,
    TextareaAutosize,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '75%',
    },
    profileContainer: {
        padding: theme.spacing(4, 0),
    },
    addSocialBtn: {
        alignItems: 'center',
        '& p': {
            marginLeft: 12,
        },
    },
}));

const CreateProfile = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        bio: '',
        githubusername: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
    });

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
                <Typography variant="h2" className="large text-primary">
                    Create Your Profile
                </Typography>
                <Grid item container className="lead">
                    <PersonIcon />
                    <Typography>
                        Let's get some information to make your profile stand
                        out
                    </Typography>
                </Grid>
                <Typography>* = required field</Typography>
                <form className="form">
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <FormLabel>* Select Professional Status</FormLabel>
                        <Select
                            value={formData}
                            onChange={() => console.log('clicked')}
                        >
                            <MenuItem value="Developer">Developer</MenuItem>
                            <MenuItem value="Junior Developer">
                                Junior Developer
                            </MenuItem>
                            <MenuItem value="Senior Developer">
                                Senior Developer
                            </MenuItem>
                            <MenuItem value="Manager">Manager</MenuItem>
                            <MenuItem value="Instructor">Instructor</MenuItem>
                            <MenuItem value="Intern">Intern</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <FormHelperText>
                            Give us an idea of where you are at in your career
                        </FormHelperText>
                    </FormControl>

                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextField
                            variant="outlined"
                            helperText="Could be your own company or one you work for"
                            placeholder="Company"
                        ></TextField>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextField
                            variant="outlined"
                            helperText="Could be your own or a company website"
                            placeholder="Website"
                        ></TextField>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextField
                            variant="outlined"
                            helperText="City & state suggested (eg. Boston, MA)"
                            placeholder="Location"
                        ></TextField>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextField
                            variant="outlined"
                            helperText="Please use comma separated values (eg.
                                HTML,CSS,JavaScript,PHP)"
                            placeholder="* Skills"
                        ></TextField>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextField
                            variant="outlined"
                            helperText="If you want your latest repos and a Github link,
                            include your username"
                            placeholder="GitHub Username"
                        ></TextField>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <TextareaAutosize
                            rowsMin={4}
                            placeholder="A short bio of yourself"
                        ></TextareaAutosize>
                        <FormHelperText>
                            Tell us a little about yourself
                        </FormHelperText>
                    </FormControl>

                    <Grid item container className={classes.addSocialBtn}>
                        <Button
                            endIcon={
                                true ? <ExpandMoreIcon /> : <ExpandLessIcon />
                            }
                        >
                            Add Social Network Links
                        </Button>
                        <Typography>Optional</Typography>
                    </Grid>
                </form>
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
    );
};

export default CreateProfile;
