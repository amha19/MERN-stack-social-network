import React from 'react';
import {
    Grid,
    Button,
    makeStyles,
    Avatar,
    Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    profileContainer: {
        margin: 24,
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 850,
        boxShadow: '2px 5px 10px rgba(0,0,0,0.1)',
        borderRadius: 8,
        borderTop: '1px solid #ccc',
        borderLeft: '1px solid #ccc',
    },
    nameAvatar: {
        display: 'flex',
        flexDirection: 'row',
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    nameStatus: {
        padding: 12,
        width: 400,
        '& p': {
            margin: '4px 0px',
        },
    },
    name: { fontWeight: 600, fontSize: '1.15rem' },
    skills: {
        padding: 12,
        width: 200,
    },
}));

const ProfileItem = ({ profile }) => {
    const classes = useStyles();
    const history = useHistory();

    const {
        userId: { name, avatar, _id },
        status,
        location,
        skills,
        company,
    } = profile;

    return (
        <Grid container item xs={8} className={classes.profileContainer}>
            <Grid className={classes.nameAvatar}>
                <Grid className={classes.avatarContainer}>
                    <Avatar
                        alt="developer-img"
                        src={avatar ? avatar : ''}
                        className={classes.avatar}
                    />
                </Grid>
                <Grid className={classes.nameStatus}>
                    <Typography className={classes.name}>{name}</Typography>
                    <Typography>
                        {status} at {company}
                    </Typography>
                    <Typography>{location}</Typography>
                    <Button
                        style={{ marginTop: 24 }}
                        variant="contained"
                        color="primary"
                        onClick={() => history.push(`/profile/${_id}`)}
                    >
                        View Profile
                    </Button>
                </Grid>
            </Grid>
            <Grid className={classes.skills}>
                {skills.slice(0, 4).map((skill, index) => (
                    <Typography key={index}>
                        <CheckIcon fontSize="small" color="primary" /> {skill}
                    </Typography>
                ))}
            </Grid>
        </Grid>
    );
};

export default ProfileItem;
