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
import SearchIcon from "@mui/icons-material/Search";
import SelectorComponent from "../selectorComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "../../slice/movieSlice";

// 🔍 Styled search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginLeft: theme.spacing(3),
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
      width: "22ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const { searchMovie } = useSelector((state) => state.movies);

  const onSearchChange = (e) => {
    dispatch(setSearchMovie(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1, position:"fixed", zIndex:"3", width:"100%"}}>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #0d0d0d, #1a1a1a)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        <Toolbar>
          {/* Logo / Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
              letterSpacing: 0.5,
              color: "#e50914",
            }}
          >
            🎬 MoviesApp
          </Typography>

          {/* Search Input */}
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

          {/* Filler space */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Section (icons + selector) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <SelectorComponent />
           
            
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit">
              <SelectorComponent/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
