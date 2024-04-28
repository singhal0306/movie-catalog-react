import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    } else {
      return name.slice(0, maxLength) + "...";
    }
  };
  return (
    <Link to={`movie/${movie.imdbmovieid}`} className="block rounded-lg p-4 shadow-xl shadow-gray-600 hover:bg-gray-200 hover:scale-105 focus:scale-100">
      <img
        alt={movie.movietitle}
        src={movie.moviemainphotos[0]}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Movie Name</dt>
            <dd className="font-medium">{truncateName(movie.movietitle, 15)}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
};

export default Movies;

// {
//   "movietitle": "Irugapatru",
//   "imdbmovieid": "tt16103606",
//   "movielanguages": [
//       "Tamil",
//       "Malayalam",
//       "Telugu",
//       "Kannada"
//   ],
//   "moviecountries": [
//       "India",
//       "United Arab Emirates"
//   ],
//   "moviemainphotos": [],
//   "moviegenres": [
//       "Drama"
//   ]
// }
