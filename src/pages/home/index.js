import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getMoviesSearch } from "../../util/getMovieSearch";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, searchMovie } = useSelector((state) => state.movies);

  //   console.log(movies?.data)
  const { data } = movies;
//   console.log(data);

  const filteredMovies = getMoviesSearch(data, searchMovie);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />

      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={5}>
          {filteredMovies?.length > 0 &&
            filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
