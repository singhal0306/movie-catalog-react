import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Description from "./Components/Description";
import ErrorPage from "./Components/ErrorPage";
import { fetchMovieData } from "./Store/movieAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Description />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
