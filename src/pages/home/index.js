import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import MovieCard from "../../MovieCard";
import { getMovies } from "../../api/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { getMoviesSearch } from "../../util/getMovieSearch";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, searchMovie } = useSelector((state) => state.movies);

  const filteredMovies = getMoviesSearch(movies, searchMovie);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <Box
        sx={{
          flexGrow: 1,
          p: { sm: 8,},
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
   
        {/* Loading or No Results */}
        {!movies?.length ? (
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
        ) : filteredMovies?.length === 0 ? (
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            mt={10}
          >
            No movies found for "<strong>{searchMovie}</strong>"
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center" marginTop={4}>
            {filteredMovies.map((movie) => (<Grid item key={movie.id}><MovieCard movie={movie} /></Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Home;
