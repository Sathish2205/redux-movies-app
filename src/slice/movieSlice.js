import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchMovie: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { setMovies, setSearchMovie } = movieSlice.actions;

export default movieSlice.reducer;
