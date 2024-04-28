import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
    isError: false,
    error: null,
  },
  reducers: {
    getMovieRequest(state) {
      state.loading = true;
      state.isError = false;
    },
    getMoviesSuccess(state, action) {
      state.loading = false;
      state.movies = action.payload;
      state.isError = false;
    },
    getMoviesFail(state, action) {
      state.loading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice.reducer;
