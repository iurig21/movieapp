import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Favourites from "./pages/Favourites.jsx";
import { FavouritesProvider } from "./contexts/FavouritesContext";

createRoot(document.getElementById("root")).render(
  <FavouritesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </FavouritesProvider>
);
