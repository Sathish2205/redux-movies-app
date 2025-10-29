import * as React from "react";
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MovieIcon from "@mui/icons-material/Movie";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch, useSelector } from "react-redux";
import { getLikedMovie, getPopularMovie } from "../../util/getMovieSearch";
import { setMovies } from "../../slice/movieSlice";

export default function SelectorComponent() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const onFilterClick = (movieList) => {
    const likedMovies = getLikedMovie(movieList);
    dispatch(setMovies(likedMovies));
  };

  const onPopularClick = (movieList) => {
    const popularMovies = getPopularMovie(movieList);
    dispatch(setMovies(popularMovies));
  };

  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1c1c1c",
        color: "white",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton onClick={() => onFilterClick(movies)}>
            <ListItemIcon>
              <ThumbUpAltIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Most Liked Movies" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => onPopularClick(movies)}>
            <ListItemIcon>
              <MovieIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Popular Movies" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ bgcolor: "#555" }} />

        <ListItem>
          <ListItemButton onClick={() => window.location.reload()}>
            <ListItemIcon>
              <RestartAltIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Reset Filters" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("right", true)}
        size="large"
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
}
