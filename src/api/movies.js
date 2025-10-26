import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {
  //   const url ='https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';
  const url = "https://jsonfakery.com/movies/infinite-scroll";
  try {
    const  {data}  = await axios.get(url)
    // console.log(data.data)


    // console.log("Date Fetched", data);
    const movieArray =data?.data
    // console.log(movieArray)
    dispatch(setMovies(movieArray));
    return data;
  } catch (err) {
    return err;
  }
};
