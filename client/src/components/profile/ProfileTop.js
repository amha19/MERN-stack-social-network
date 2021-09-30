import React from 'react';
import {
    Avatar,
    Grid,
    makeStyles,
    Typography,
    Box,
    Link,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    profileTop: {
        backgroundColor: '#17a2b8',
        padding: theme.spacing(2, 0),
        color: '#fff',
        width: '100%',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& p:first-of-type': {
            fontSize: '1.4rem',
            fontWeight: '600',
        },
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    svgBox: {
        '& a': {
            margin: theme.spacing(0, 1),
            cursor: 'pointer',
        },
    },
}));

const ProfileTop = ({ profile }) => {
    const classes = useStyles();

    console.log('profile: ', profile);

    const {
        company,
        location,
        status,
        userId: { avatar, name },
        skills,
        social,
    } = profile;

    let linkedin,
        twitter,
        instagram,
        facebook,
        youtube = null;

    if (social) {
        linkedin = social.linkedin ? social.linkedin : null;
        twitter = social.twitter ? social.twitter : null;
        instagram = social.instagram ? social.instagram : null;
        facebook = social.facebook ? social.facebook : null;
        youtube = social.youtube ? social.youtube : null;
    }

    return (
        <Grid item sm={8} xs={12} container className={classes.profileTop}>
            <Avatar
                alt="developer-img"
                src={avatar ? avatar : ''}
                className={classes.avatar}
            />
            <Typography>{name}</Typography>
            <Typography>
                {status} at {company ? company : ''}
            </Typography>
            <Typography>{location}</Typography>
            <Box mt={4} className={classes.svgBox}>
                {linkedin && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={linkedin}
                    >
                        <LinkedInIcon />
                    </Link>
                )}
                {twitter && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={twitter}
                    >
                        <TwitterIcon />
                    </Link>
                )}
                {instagram && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={instagram}
                    >
                        <InstagramIcon />
                    </Link>
                )}
                {facebook && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={facebook}
                    >
                        <FacebookIcon />
                    </Link>
                )}
                {youtube && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={youtube}
                    >
                        <YouTubeIcon />
                    </Link>
                )}
            </Box>
        </Grid>
    );
};

export default ProfileTop;
