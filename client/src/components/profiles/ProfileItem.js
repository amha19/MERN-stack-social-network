import React from 'react';
import { Card, Grid, Button, makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '750px',
        maxWidth: '750px',
        margin: theme.spacing(3, 2),
        padding: theme.spacing(2, 3),
    },
}));

const ProfileItem = ({ profile }) => {
    const classes = useStyles();
    const {
        userId: { name, avatar },
        status,
        location,
        skills,
        company,
    } = profile;

    console.log('profile item: ', profile);

    return (
        <Grid style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className={classes.card}>
                <Grid style={{ flexGrow: 2 }}>
                    <Avatar src={avatar ? avatar : ''} />
                </Grid>
                <Grid style={{ flexGrow: 2 }}>
                    <p>{name}</p>
                    <p>
                        {status} at {company}
                    </p>
                    <p>{location}</p>
                    <Button>View Profile</Button>
                </Grid>
                <Grid style={{ flexGrow: 6 }}>
                    <ul>
                        {skills.slice(0, 4).map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </Grid>
            </Card>
        </Grid>
    );
};

export default ProfileItem;
