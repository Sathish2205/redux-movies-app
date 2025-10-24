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
