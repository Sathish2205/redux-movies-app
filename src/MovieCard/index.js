import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function MovieCard({movie}) {
    
  const { id, original_title, poster_path, release_date,vote_count} = movie;

    console.log("movie");


  return (
     <Box sx={{ flexGrow:2, p: 2, width:200 }}>
    <Grid size={35} >
    <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        sx={{ height: 300}}
        image={poster_path}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {original_title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Release Date: {release_date}
        </Typography>
      </CardContent>
      <CardActions>
       <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <HowToRegIcon></HowToRegIcon><Typography size="small"> {vote_count}</Typography>
      </CardActions>
    </Card>
    </Grid>
    </Box>
  );
}
