import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    expContainer: {
        width: '49%',
        padding: theme.spacing(3),
        minHeight: 200,
        backgroundColor: '#e0e0e0',
    },
}));

const ProfileExperience = ({ profile: { experience } }) => {
    const classes = useStyles();

    const changeDateFormat = (date) => {
        return new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <Grid item className={classes.expContainer}>
            <Typography>Experience</Typography>
            {experience.map((exp, index) => {
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
                                    width: '90%',
                                    margin: '16px 0',
                                }}
                            />
                        )}
                        <Typography>{company}</Typography>
                        <Typography>{location}</Typography>
                        <Typography>
                            {changeDateFormat(from)} -{' '}
                            {current ? 'Now' : changeDateFormat(to)}
                        </Typography>
                        <Typography>Position: {title}</Typography>
                        {description && (
                            <Typography>Description: {description}</Typography>
                        )}
                    </Fragment>
                );
            })}
        </Grid>
    );
};

export default ProfileExperience;
