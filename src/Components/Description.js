import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
const Description = () => {
  const { id } = useParams();

  const movie = useSelector((state) =>
    state.movies.movies.filter((movie) => {
      return movie.imdbmovieid === id;
    })
  );

  // console.log(movie)
  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 m-12">
      <img
        alt={movie[0].movietitle}
        src={movie[0].moviemainphotos[0]}
        className="h-32 w-80 object-cover md:h-full"
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-4">
        <h2 className="mt-4 font-black uppercase mb-2">
          <span className="text-2xl font-black sm:text-3xl lg:text-4xl">
            {movie[0].movietitle}
          </span>
        </h2>

        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-white px-4 py-3 sm:px-6 sm:py-4">
            <h3 className="mt-0.5 text-lg flex justify-start font-medium text-gray-900">
              Genre
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {movie[0].moviegenres.map((genre) => {
                return (
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    {genre}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="rounded-[10px] bg-white px-4 py-3 sm:px-6 sm:py-4">
            <h3 className="mt-0.5 text-lg flex justify-start font-medium text-gray-900">
              Languages
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {movie[0].movielanguages.map((language) => {
                return (
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    {language}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="rounded-[10px] bg-white px-4 py-3 sm:px-6 sm:py-4">
            <h3 className="mt-0.5 text-lg flex justify-start font-medium text-gray-900">
              Countries
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {movie[0].moviecountries.map((country) => {
                return (
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    {country}
                  </span>
                );
              })}
            </div>
          </div>
        </article>
        <Link
          to="/"
          className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Description;
