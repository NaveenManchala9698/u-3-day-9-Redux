import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";

import FavouritesPage from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
