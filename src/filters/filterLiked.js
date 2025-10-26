import axios from "axios";
import { setMovies } from "../slice/movieSlice";
export const filterLiked=()=>async (dispatch)=>{
    const url="https://jsonfakery.com/movies/infinite-scroll";
    try {
        const {data}=await axios.get(url);
        console.log(data)
        const filterArray=data?.data
        console.log(filterArray)
        
    }catch(err){
        return err
    }
}