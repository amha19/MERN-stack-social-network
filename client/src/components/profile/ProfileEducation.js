import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';
import { changeDateFormat } from '../../utils/dateFormat';

const useStyles = makeStyles((theme) => ({
    educContainer: {
        width: '49%',
        padding: theme.spacing(3),
        backgroundColor: '#e0e0e0',
    },
}));

const ProfileEducation = ({ profile: { education } }) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.educContainer}>
            <Typography>Education</Typography>
            {education.map((educ, index) => {
                const {
                    school,
                    degree,
                    fieldofstudy,
                    from,
                    to,
                    current,
                    description,
                } = educ;
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
                        <Typography>{school}</Typography>
                        <Typography>
                            {changeDateFormat(from)} -{' '}
                            {current ? 'Now' : changeDateFormat(to)}
                        </Typography>
                        <Typography>Degree: {degree}</Typography>
                        <Typography>Field Of Study: {fieldofstudy}</Typography>
                        {description && (
                            <Typography>Description: {description}</Typography>
                        )}
                    </Fragment>
                );
            })}
        </Grid>
    );
};

export default ProfileEducation;
