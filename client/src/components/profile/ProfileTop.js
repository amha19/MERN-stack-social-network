import React from 'react';
import { Avatar, Grid, makeStyles, Typography, Box } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    profileTop: {
        border: '1px solid #000',
        backgroundColor: 'lightblue',
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
}));

const ProfileTop = ({ profile }) => {
    const classes = useStyles();

    const {
        company,
        location,
        status,
        userId: { avatar, name },
    } = profile;
    // debugger;
    return (
        <Grid item xs={8} className={classes.profileTop}>
            <Avatar
                alt="developer-img"
                src={avatar ? avatar : ''}
                style={{ width: 64, height: 64 }}
            />
            <Typography>{name}</Typography>
            <Typography>
                {status} at {company ? company : ''}
            </Typography>
            <Typography>{location}</Typography>
            <Box>
                <LinkedInIcon />
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
                <YouTubeIcon />
            </Box>
        </Grid>
    );
};

export default ProfileTop;
