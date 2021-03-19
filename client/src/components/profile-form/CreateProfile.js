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
    OutlinedInput,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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
    selectProfession: {
        marginBottom: 8,
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        '& input': {
            padding: 12,
        },
    },
    addSocialBtn: {
        alignItems: 'center',
        margin: theme.spacing(2, 0),
        '& p': {
            marginLeft: 12,
        },
    },
    selectInput: {
        padding: 12,
    },
    formControlSocial: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        '& input': {
            padding: 12,
        },
        '& svg': {
            marginLeft: 12,
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
        sel: 'working',
    });
    const [showSocial, setShowSocial] = useState(false);

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
                    Create Your Profile
                </Typography>
                <Grid item container className={classes.lead}>
                    <PersonIcon />
                    <Typography>
                        Let's get some information to make your profile stand
                        out
                    </Typography>
                </Grid>
                <Typography className={classes.required}>
                    * = required field
                </Typography>
                <Grid item container>
                    <form className="form">
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <FormLabel className={classes.select}>
                                * Select Professional Status
                            </FormLabel>
                            <Select
                                value={formData.sel}
                                input={
                                    <OutlinedInput
                                        classes={{ input: classes.selectInput }}
                                    />
                                }
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
                                <MenuItem value="Instructor">
                                    Instructor
                                </MenuItem>
                                <MenuItem value="Intern">Intern</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                            <FormHelperText>
                                Give us an idea of where you are at in your
                                career
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
                                rowsMin={6}
                                placeholder="A short bio of yourself"
                            ></TextareaAutosize>
                            <FormHelperText>
                                Tell us a little about yourself
                            </FormHelperText>
                        </FormControl>

                        <Grid item container className={classes.addSocialBtn}>
                            <Button
                                endIcon={
                                    showSocial ? (
                                        <ExpandLessIcon />
                                    ) : (
                                        <ExpandMoreIcon />
                                    )
                                }
                                onClick={() =>
                                    setShowSocial((preState) => !preState)
                                }
                            >
                                Add Social Network Links
                            </Button>
                            <Typography>Optional</Typography>
                        </Grid>
                        {showSocial && (
                            <>
                                <Grid
                                    item
                                    container
                                    className={classes.formControlSocial}
                                >
                                    <TwitterIcon
                                        fontSize="large"
                                        style={{ color: '#00acee' }}
                                    />
                                    <FormControl style={{ width: '92%' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Twitter URL"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    className={classes.formControlSocial}
                                >
                                    <FacebookIcon
                                        fontSize="large"
                                        style={{ color: '#3b5998' }}
                                    />
                                    <FormControl style={{ width: '92%' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Facebook URL"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    className={classes.formControlSocial}
                                >
                                    <LinkedInIcon
                                        fontSize="large"
                                        style={{ color: '#0072b1' }}
                                    />
                                    <FormControl style={{ width: '92%' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="LinkedIn URL"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    className={classes.formControlSocial}
                                >
                                    <YouTubeIcon
                                        fontSize="large"
                                        style={{ color: '#ff0000' }}
                                    />
                                    <FormControl style={{ width: '92%' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Youtube URL"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    className={classes.formControlSocial}
                                >
                                    <InstagramIcon
                                        fontSize="large"
                                        style={{ color: '#8a3ab9' }}
                                    />
                                    <FormControl style={{ width: '92%' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Instagram URL"
                                        />
                                    </FormControl>
                                </Grid>
                            </>
                        )}
                        <Grid item container className={classes.btnContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => console.log('submit')}
                            >
                                Submit
                            </Button>
                            <Button
                                variant="contained"
                                color="default"
                                onClick={() => console.log('go back')}
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

export default CreateProfile;
