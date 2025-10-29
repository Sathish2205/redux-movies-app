import Home from './pages/home/index.js';
import MovieDetailCard from './MovieCard/movieDetailCard.js';
import  AllFavoriteMovies  from './components/favorites/favorites.js';
import {Routes,Route} from "react-router-dom"
import FavMovieDetailCard from './MovieCard/favMovieDetailCard.js';
import SignIn from './signin/signin.js';
import LogIn from './login/login.js';
import './App.css';
 import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
<Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/moviedetails/:id' element={<MovieDetailCard/>}/>
  <Route path='/favorites' element={<AllFavoriteMovies/>}/>
  <Route path='/favmoviedetails/:id' element={<FavMovieDetailCard/>}/>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/login' element={<LogIn/>}/>
</Routes>
<ToastContainer/>
</>

  );
}

export default App;
