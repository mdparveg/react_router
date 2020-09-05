import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 350,
    overflow: 'hidden'
  },
  media: {
    height: 140,
  },
});



const Post = (props) => {
  const { id, title } = props.post;

  const classes = useStyles();
  return (

    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://loremflickr.com/320/240?random=${id}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Id: {id}
            </Typography>
            <Typography className="title"
              color="textSecondary" component="p">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={"/post/" + id}><Button size="small" color="primary">
            See More
        </Button></Link>
        </CardActions>
      </Card>
    </Grid>


  );
};

export default Post;