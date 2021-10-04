import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';
import { changeDateFormat } from '../../utils/dateFormat';

const useStyles = makeStyles((theme) => ({
    educContainer: {
        width: '49%',
        border: '1px solid #bfbfbf',
        padding: theme.spacing(3),
        backgroundColor: '#e0e0e0',
    },
    education: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
}));

const ProfileEducation = ({ profile: { education } }) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.educContainer}>
            <Typography className={classes.education}>Education</Typography>
            {education.length > 0 ? (
                education.map((educ, index) => {
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
                            <Typography style={{ fontSize: '1.1rem' }}>
                                <b>{school}</b>
                            </Typography>
                            <Typography>
                                {changeDateFormat(from)} -{' '}
                                {current ? 'Now' : changeDateFormat(to)}
                            </Typography>
                            <Typography style={{ marginTop: 4 }}>
                                <b>Degree:</b> {degree}
                            </Typography>
                            <Typography>
                                <b>Field Of Study:</b> {fieldofstudy}
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
                <Typography>No Education Credentials</Typography>
            )}
        </Grid>
    );
};

export default ProfileEducation;
