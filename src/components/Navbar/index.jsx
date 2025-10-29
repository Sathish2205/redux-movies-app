import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import SelectorComponent from "../selectorComponent";
import ProfileMenu from "../profile";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "../../slice/movieSlice";
import { useNavigate } from "react-router-dom";

// 🔍 Styled search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchMovie } = useSelector((state) => state.movies);

  const onSearchChange = (e) => {
    dispatch(setSearchMovie(e.target.value));
  };

  const onFavClick = () => {
    navigate("/favorites");
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #0d0d0d, #1a1a1a)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures navbar is above all
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section - Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
              color: "#e50914",
              flexShrink: 0,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            🎬 MoviesApp
          </Typography>

          {/* Middle Section - Search */}
          <Box sx={{ flexGrow: 1, mx: { xs: 1, sm: 3 } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search movies..."
                inputProps={{ "aria-label": "search" }}
                value={searchMovie}
                onChange={onSearchChange}
              />
            </Search>
          </Box>

          {/* Right Section - Desktop Icons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title="Favorites">
              <IconButton onClick={onFavClick} color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <SelectorComponent />
            <ProfileMenu />
          </Box>

          {/* Right Section - Mobile Icons */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title="Favorites">
              <IconButton onClick={onFavClick} color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <SelectorComponent />
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <Box sx={{ height: { xs: "56px", sm: "64px" } }} />
    </>
  );
}
