import MovieCard from "./components/MovieCard";
import Title from "./components/Title";
import "./global.css";
import {useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import { useNavigate } from "react-router";

function App() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day",
        options
      );
      const responseJSON = await response.json();
      const { results } = responseJSON;
      setMovies(results);
    }
    fetchMovies();
  }, []);

  async function SearchMovies(input) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
         `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}`,options);
    const responseJSON = await response.json();
    const {results} = responseJSON;
    setMovies(results);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans space-y-5">
      <header className="px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-7 sm:items-end  max-w-7xl mx-auto justify-center">
        <Title />
        <div className="flex gap-2">
          <Button onClick={() => navigate("/")}> Home </Button>
          <Button onClick={() => navigate("/favourites")}> Favourites </Button>
        </div>
      </header>
      <main className="px-6 sm:px-10 pb-24 max-w-7xl mx-auto w-full space-y-5">
        <SearchBar SearchMovies={SearchMovies}/>
        <MovieCard movies={movies} />
      </main>
    </div>
  );
}

export default App;
