import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import FavouritesContext from "../contexts/FavouritesContext";

function Favourites() {
  const navigate = useNavigate();
  const { favourites, HandleMovieClick } = useContext(FavouritesContext);
  const [animatingId, setAnimatingId] = useState(null);

  const handleFavourite = (movie) => {
    setAnimatingId(movie.id);
    HandleMovieClick(movie);
    setTimeout(() => setAnimatingId(null), 600);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans space-y-5">
      <header className="px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-7 sm:items-end max-w-7xl mx-auto justify-center">
        <Title />
        <div className="flex gap-2">
          <Button onClick={() => navigate("/")}> Home </Button>
          <Button onClick={() => navigate("/favourites")}> Favourites </Button>
        </div>
      </header>
      <div>
        <main className="px-6 sm:px-10 pb-24 max-w-7xl mx-auto w-full space-y-7">
          {favourites.length > 0 ? (
            <h1 className="text-center text-2xl font-bold">
              Your favourite movies
            </h1>
          ) : (
            <h1 className="text-center text-2xl font-bold">
              No favourites yet
            </h1>
          )}
          <div className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] w-full">
            {favourites.map((movie) => (
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
                  aria-label="Remove from favourites"
                >
                  <span className="heart-icon text-red-500 transition-all duration-300">
                    {}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
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
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{movie.title}</h2>
                  <span className="text-sm text-neutral-400">
                    {movie.release_date
                      ? movie.release_date.slice(0, 4)
                      : "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Favourites;
