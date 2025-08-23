import { createContext, useState } from "react";
import { useEffect } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")) : []);

      useEffect(() => {
      localStorage.setItem("movies" , JSON.stringify(favourites));
    },[favourites]);

  const HandleMovieClick = (movie) => {
    setFavourites(favourites.some((fav) => fav.id === movie.id) ? favourites.filter((fav) => fav.id !== movie.id) : [...favourites,movie] );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, HandleMovieClick }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext