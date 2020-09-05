import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textItems: 'center',
        margin: "0 auto"
    },
});

const PostDetails = () => {
    const classes = useStyles();
    const [post, setPost] = useState([]);
    const [comment, setComments] = useState([]);
    const { title, body } = post
    const { id } = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`https://loremflickr.com/320/240?random=${id}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title: {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Read: {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <div style={{ textAlign: "center" }}>
                {
                    comment.map(comment => <Comment
                        key={comment.id}
                        comment={comment}></Comment>)
                }
            </div>

        </>
    );
};

export default PostDetails;