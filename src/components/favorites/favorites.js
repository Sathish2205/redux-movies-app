import { useEffect } from "react";
import { setFavorite } from "../../slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import FavMovieCard from "../../MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Footer from "../footer/footer";

const AllFavoriteMovies = () => {
  const favMovies = useSelector((state) => state.movies.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    dispatch(setFavorite(storedFav));
  }, [dispatch]);
  console.log("fav", favMovies);
  const onCardClick = (id) => {
    navigate(`/favmoviedetails/${id}`);
  };

  const onClearAll=()=>{
    localStorage.clear();
alert("All local storage data cleared!");
navigate("/")

  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <Box
        sx={{
          flexGrow: 1,
          p: { sm: 8 },
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mt={2}
          fontSize={35}
        >
          <strong>Favorite Movies</strong>
        </Typography>

        {/* <button>Clear all</button> */}
        <Button  onClick={onClearAll} variant="outlined">Clear All</Button>
        {/* Loading or No Results */}
        {!favMovies?.length ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
            }}
          >
            <CircularProgress size={50} thickness={4} color="primary" />
          </Box>
        ) : favMovies?.length === 0 ? (
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            mt={10}
          >
            No movies found
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center" marginTop={4}>
            {favMovies.map((movie) => (
              <Grid onClick={() => onCardClick(movie.id)} item key={movie.id}>
                <FavMovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer/>
    </>
  );
};

export default AllFavoriteMovies;
