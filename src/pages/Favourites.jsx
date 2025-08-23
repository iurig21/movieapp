import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate} from "react-router";
import { useContext, useEffect} from "react";
import FavouritesContext from "../contexts/FavouritesContext";

function Favourites() {
  const navigate = useNavigate();

    const {favourites,HandleMovieClick} = useContext(FavouritesContext);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans space-y-5">
      <header className="px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-7 sm:items-end  max-w-7xl mx-auto justify-center">
        <Title />
        <div className="flex gap-2">
          <Button onClick={() => navigate("/")}> Home </Button>
          <Button onClick={() => navigate("/favourites")}> Favourites </Button>
        </div>
      </header>
      <div>
        <main className="px-6 sm:px-10 pb-24 max-w-7xl mx-auto w-full space-y-7">
            <h1 className="text-center text-2xl font-bold">Your favourite movies</h1>
          <div className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] w-full">
            {favourites.map((movie, idx) => (
              <article
                key={idx}
                className="group relative flex flex-col rounded-xl overflow-hidden bg-neutral-800/70 border border-neutral-700 shadow transition hover:shadow-xl hover:border-neutral-500"
                onClick={() => HandleMovieClick(movie)}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-700">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : ""
                    }
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
        </main>
      </div>
    </div>
  );
}

export default Favourites;
