import { movieAction } from "./movieSlice";
import movies from "./movies-filter-react";

export const fetchMovieData = () => {
  return (dispatch) => {
    try {
      dispatch(movieAction.getMovieRequest());
      const movieData = movies;
      dispatch(movieAction.getMoviesSuccess(movieData));
    } catch (error) {
      console.log(error);
      dispatch(movieAction.getMoviesFail(error));
    }
  };
};
