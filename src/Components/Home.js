import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Movies from "./Movies";

const Home = () => {
  const moviesData = useSelector((state) => state.movies.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(moviesData);
  }, [moviesData]);

  const handleSearch = () => {
    // Filter movies based on search term, genre, and country
    const filteredMovies = moviesData.filter((movie) => {
      const matchTitle = movie.movietitle
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchGenre = genreFilter
        ? movie.moviegenres.includes(genreFilter)
        : true;
      const matchCountry = countryFilter
        ? movie.moviecountries.includes(countryFilter)
        : true;
      const matchLanguage = languageFilter
        ? movie.movielanguages.includes(languageFilter)
        : true;
      return matchTitle && matchGenre && matchCountry && matchLanguage;
    });
    // Update state with filtered movies
    setSearchResults(filteredMovies);
  };

  useEffect(() => {
    handleSearch();
  });

  return (
    <div className="">
      <div className="bg-gray-100 mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <input
            className="px-3 rounded-lg me-4 py-2 text-center sm:text-left"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by movie title"
          />
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <select
              className="rounded-lg p-2 border-gray-300 text-gray-700 sm:text-sm me-4"
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="">All Genres</option>
              {moviesData
                .reduce((genres, movie) => {
                  movie.moviegenres.forEach((genre) => {
                    if (!genres.includes(genre)) {
                      genres.push(genre);
                    }
                  });
                  return genres;
                }, [])
                .map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
            </select>
            <select
              className="rounded-lg p-2 border-gray-300 text-gray-700 sm:text-sm me-4"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            >
              <option value="">All Countries</option>
              {moviesData
                .reduce((countries, movie) => {
                  movie.moviecountries.forEach((country) => {
                    if (!countries.includes(country)) {
                      countries.push(country);
                    }
                  });
                  return countries;
                }, [])
                .map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
            </select>
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="rounded-lg p-2 border-gray-300 text-gray-700 sm:text-sm me-4"
            >
              <option value="">All Languages</option>
              {moviesData
                .reduce((languages, movie) => {
                  movie.movielanguages.forEach((language) => {
                    if (!languages.includes(language)) {
                      languages.push(language);
                    }
                  });
                  return languages;
                }, [])
                .map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="p-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {searchResults.map((movie) => {
            return <Movies key={movie.imdbmovieid} movie={movie} />;
          })}
        </div>
      )}
      {searchResults.length === 0 && (
        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-4">
          <h2 className="mt-4 font-black uppercase mb-2">
            <span className="text-2xl font-black sm:text-3xl lg:text-4xl">
              No Movie Found
            </span>
          </h2>
        </div>
      )}
    </div>
  );
};
export default Home;
