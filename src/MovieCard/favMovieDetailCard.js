import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setFavorite } from "../slice/movieSlice";
import { toast } from "react-toastify";

export default function FavMovieDetailCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { movies } = useSelector((state) => state.movies);

  const moviedetails = movies.find((movie) => movie.id === id);

  const RemoveFromFav = (id) => {
  // Get current favorites
  const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Remove the movie by ID
  const updatedFav = allFavorites.filter((movie) => movie.id !== id);

  // Update localStorage
  localStorage.setItem("favorites", JSON.stringify(updatedFav));

  // Update Redux state
  dispatch(setFavorite(updatedFav));

  // alert("Removed from Favorites");
  toast.success(`${moviedetails.original_title} Removed from Favorites`)

  navigate("/favorites");
  localStorage.clear();
  };

  if (!moviedetails) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography mt={2}>Loading movie details...</Typography>
      </Box>
    );
  }

  const {
    original_title,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    vote_average,
  } = moviedetails;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      <Card
        sx={{
          maxWidth: 900,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: 6,
          borderRadius: 4,
          backgroundColor: "rgba(20,20,20,0.85)",
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: 300 } }}
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />

        <CardContent sx={{ p: 4 }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            color="#fff"
            variant="h4"
            gutterBottom
          >
            {original_title}
          </Typography>
          <Typography variant="body1" color="#fff" sx={{ mb: 2 }}>
            {overview}
          </Typography>
          <Typography color="#efde21ff" variant="subtitle1">
            Release Date: {release_date}
          </Typography>
          <Typography color="#efde21ff" variant="subtitle1">
            Rating: ⭐ {vote_average}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#75767809",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 8,
              },
            }}
            onClick={() => RemoveFromFav(id)}
          >
            <FavoriteIcon /> Remove from Favourite
          </Button>
          <br />
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#75767809",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 8,
              },
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
