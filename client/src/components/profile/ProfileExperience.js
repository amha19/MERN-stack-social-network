import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';
import { changeDateFormat } from '../../utils/dateFormat';

const useStyles = makeStyles((theme) => ({
    expContainer: {
        width: '49%',
        border: '1px solid #bfbfbf',
        padding: theme.spacing(3),
        backgroundColor: '#e0e0e0',
    },
    experience: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
}));

const ProfileExperience = ({ profile: { experience } }) => {
    const classes = useStyles();

    console.log('experience ', experience);

    return (
        <Grid item className={classes.expContainer}>
            <Typography className={classes.experience}>Experience</Typography>
            {experience.length > 0 ? (
                experience.map((exp, index) => {
                    const {
                        title,
                        company,
                        location,
                        from,
                        to,
                        current,
                        description,
                    } = exp;
                    return (
                        <Fragment key={index}>
                            {index > 0 && (
                                <Divider
                                    style={{
                                        width: '95%',
                                        margin: '16px 0',
                                    }}
                                />
                            )}
                            <Typography style={{ fontSize: '1.1rem' }}>
                                <b>{company}</b>
                            </Typography>
                            <Typography>{location}</Typography>
                            <Typography>
                                {changeDateFormat(from)} -{' '}
                                {current ? 'Now' : changeDateFormat(to)}
                            </Typography>
                            <Typography style={{ marginTop: 4 }}>
                                <b>Position:</b> {title}
                            </Typography>
                            {description && (
                                <Typography>
                                    <b>Description:</b> {description}
                                </Typography>
                            )}
                        </Fragment>
                    );
                })
            ) : (
                <Typography>No Experience Credentials</Typography>
            )}
        </Grid>
    );
};

export default ProfileExperience;
