import { useState, useContext } from "react";
import FavouritesContext from "../contexts/FavouritesContext";
import { Star } from 'lucide-react';

function MovieCard({ movies }) {
  const { favourites, HandleMovieClick } = useContext(FavouritesContext);
  const [animatingId, setAnimatingId] = useState(null);

  const handleFavourite = (movie) => {
    setAnimatingId(movie.id);
    HandleMovieClick(movie);
    setTimeout(() => setAnimatingId(null), 600);
  };

  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] w-full">
      {movies.map((movie) => {
        const isFavourite = favourites.some((fav) => fav.id === movie.id);
        return (
          <div
            key={movie.id}
            className="relative rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 shadow transition hover:shadow-xl hover:border-neutral-500"
          >
            {}
            <button
              className={`absolute top-3 right-3 z-10 rounded-full bg-neutral-900/80 p-2 transition hover:bg-neutral-800 ${
                animatingId === movie.id ? "animate-heart" : ""
              }`}
              onClick={() => handleFavourite(movie)}
              aria-label={
                isFavourite ? "Remove from favourites" : "Add to favourites"
              }
            >
              <span
                className={`heart-icon transition-all duration-300 ${
                  isFavourite ? "text-red-500" : "text-neutral-400"
                }`}
              >
                {isFavourite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </span>
            </button>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              {}
              <span className="text-sm text-neutral-400">
                {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
              </span>
              <span className="flex gap-2 text-sm text-neutral-400">
                <Star className="text-yellow-500"/>
                {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;
