import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container, Grid } from '@material-ui/core';

const Home = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1 style={{textAlign: "center", margin: '10px 0 20px 0'}}>Welcome to the React Blog</h1>
            <Container>
      <Grid container spacing={2}>
            {
                post.map(post => <Post
                    key={post.id}
                    post={post}></Post>)
            }
    </Grid>
    </Container>
         
        </div>
    );
};

export default Home;