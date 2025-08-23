import { useContext} from "react";
import FavouritesContext from "../contexts/FavouritesContext";

function MovieCard({movies}) {
    
  const {HandleMovieClick} = useContext(FavouritesContext);

  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] w-full">
      {movies.map((movie,idx) => (
        <article
          key={idx}
          className="group relative flex flex-col rounded-xl overflow-hidden bg-neutral-800/70 border border-neutral-700 shadow transition hover:shadow-xl hover:border-neutral-500" onClick={() => HandleMovieClick(movie)}
        >
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-700">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}  
              alt={movie.title + " poster"}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-neutral-950/0 opacity-70" />
            <span className="absolute top-2 right-2 text-[10px] font-medium tracking-wide uppercase bg-neutral-900/80 backdrop-blur px-2 py-1 rounded-full border border-neutral-700 text-neutral-300">
              {new Date(movie.release_date).getFullYear()}
            </span>
          </div>
          <div className="flex flex-col gap-2 p-3 sm:p-4 grow">
            <h3 className="text-sm sm:text-base font-semibold leading-tight text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
              {movie.title}
            </h3>
            <p className="text-[11px] uppercase tracking-wide text-neutral-400">
              {new Date(movie.release_date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            {movie.overview && (
              <p className="mt-auto text-xs text-neutral-300 line-clamp-4 leading-relaxed">
                {movie.overview}
              </p>
            )}
          </div>
          <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-amber-400/60 transition rounded-xl" />
        </article>
      ))}
    </div>
  );
}

export default MovieCard;
