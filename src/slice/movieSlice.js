import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchMovie: "",
  filterLiked: []
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
    setFilterLiked:(state,action)=>{
      state.movies=action.payload
    }
  },
});

export const { setMovies, setSearchMovie, setFilterLiked } = movieSlice.actions;

export default movieSlice.reducer;
