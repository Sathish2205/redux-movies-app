import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchMovie: "",
  favorite:[],
  name:"",
  email:"",
  pass1:"",
  pass2:''
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
    setFavorite:(state,action)=>{
      state.favorite=action.payload
    },
    setName:(state,action)=>{
      state.name=action.payload
    },
    setEmail:(state,action)=>{
      state.email=action.payload
    },
    setPass1:(state,action)=>{
      state.pass1=action.payload
    },
    setPass2:(state,action)=>{
      state.pass2=action.payload
    }
  },
});

export const { setMovies, setSearchMovie, setFavorite ,setName,setEmail,setPass1,setPass2 } = movieSlice.actions;

export default movieSlice.reducer;
