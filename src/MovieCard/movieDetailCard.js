import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from "@mui/material/Alert";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetailCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.movies);

  const moviedetails = movies.find((movie) => movie.id === id);

  const AddToFav = (id) => {
  const moviedetails = movies.find((movie) => movie.id === id);
    console.log(moviedetails)
    
  // Get existing favorites from localStorage or start with an empty array
    const allFavorites=JSON.parse(localStorage.getItem("favorites"))||[];

    // Check Is Already In Fav
    const isAlreadyFav=allFavorites.some(movie=>movie.id==id);
    if(isAlreadyFav){
        alert(`${moviedetails.original_title} is Already Favorite`);
    }

     // Add the new movie and save to localStorage
    const updatedFav=[...allFavorites,moviedetails];

    localStorage.setItem("favorites",JSON.stringify(updatedFav))

    
    // alert(`${moviedetails.original_title}Added to Favorites`);
    toast.success(`${moviedetails.original_title} Added to Favorites`)

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
            onClick={() => AddToFav(id)}
          >
            <FavoriteIcon /> Add To Favorite
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
