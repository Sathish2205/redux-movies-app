import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {
  //   const url ='https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
  const url = "https://jsonfakery.com/movies/infinite-scroll";
  try {
    const  {data}  = await axios.get(url);
    // console.log("Date Fetched", data);
    dispatch(setMovies(data));
    return data;
  } catch (err) {
    return err;
  }
};
