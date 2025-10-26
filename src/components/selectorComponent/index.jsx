import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from '@mui/icons-material/Movie';
import { useDispatch, useSelector } from "react-redux";
import { getLikedMovie, getPopularMovie } from "../../util/getMovieSearch";
import { setMovies } from "../../slice/movieSlice";

export default function SelectorComponent() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const onFilterClick = (movies) => {
    console.log(movies);
    const likedMovies = getLikedMovie(movies);
    // console.log(getLikedMovie(movies));
    dispatch(setMovies(likedMovies));
  };

  const onPopularClick=(movies)=>{
    const popularMovies=getPopularMovie(movies)
    dispatch(setMovies(popularMovies));
  }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem >
          <ListItemButton  onClick={() => onFilterClick(movies)}>
            <ListItemIcon><ThumbUpAltIcon/>Liked Movies</ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => onPopularClick(movies)}>
            <ListItemIcon><MovieIcon/>Popular Movies</ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
  
    </Box>
  );

  return (
    <div>
      <>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={toggleDrawer(anchor, true)}></Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </>
    </div>
  );
}
