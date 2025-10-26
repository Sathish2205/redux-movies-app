
export const getMoviesSearch = (movies, value) => {
  if (!value.trim()) {
    return movies;
  } else {
    return movies.filter((movie) => {
      const title = movie?.original_title || "";
      return title.toLowerCase().includes(value.toLowerCase());
    });
  }
};

export const getLikedMovie=(movies)=>{
    return movies.filter((movie)=>movie?.vote_count>1000)
}

export const getPopularMovie=(movies)=>{
    return movies.filter((movie)=>movie?.popularity>10)
}
