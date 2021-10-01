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
import LanguageIcon from '@material-ui/icons/Language';

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

    const {
        company,
        location,
        status,
        website,
        userId: { avatar, name },
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <YouTubeIcon />
                    </Link>
                )}
                {website && (
                    <Link
                        variant="inherit"
                        color="inherit"
                        underline="none"
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LanguageIcon />
                    </Link>
                )}
            </Box>
        </Grid>
    );
};

export default ProfileTop;
