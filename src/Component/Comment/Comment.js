import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        width: 250,
        marginTop: 25,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const Comment = (props) => {
    const { name, email, body } = props.comment;
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h6">
                            Name: {name}
                        </Typography>
                        <Typography gutterBottom>
                            comment: {body}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {email}
                        </Typography>

                    </Grid>
                    <Grid item xs={3}>
                        <Avatar src={`https://loremflickr.com/320/240?random=${Math.random()}`}
                            style={{ height: '100px', width: '120px' }} />
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
};

export default Comment;