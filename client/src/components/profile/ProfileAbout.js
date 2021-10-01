import React from 'react';
import { Grid, makeStyles, Typography, Box, Divider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    profileAbout: {
        marginTop: theme.spacing(3),
        backgroundColor: '#e0e0e0',
        padding: theme.spacing(2, 0),
        width: '100%',
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bioHead: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: theme.palette.primary.main,
    },
}));

const ProfileAbout = ({ profile }) => {
    const classes = useStyles();
    const {
        bio,
        skills,
        userId: { name },
    } = profile;

    return (
        <Grid item sm={8} xs={12} container className={classes.profileAbout}>
            <Typography className={classes.bioHead}>{name}s Bio</Typography>
            {bio && <Typography>{bio}</Typography>}
            <Divider style={{ width: '90%', marginBottom: 16 }} />
            <Typography className={classes.bioHead}>Skill Set</Typography>

            <Box display="flex" flexDirection="row" justifyContent="center">
                {skills.map((skill, index) => (
                    <Typography key={index} style={{ padding: '0 16px' }}>
                        <Box display="flex" alignItems="center">
                            <CheckIcon
                                fontSize="small"
                                color="primary"
                                style={{ marginRight: 4 }}
                            />
                            {skill}
                        </Box>
                    </Typography>
                ))}
            </Box>
        </Grid>
    );
};

export default ProfileAbout;
