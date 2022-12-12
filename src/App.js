import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./components/homepage/HomePage";
import SearchBar from "./components/SearchBar";
import MusicPlayer from "./components/MusicPlayer";
import PlaylistsPage from "./components/playlistspage/PlaylistsPage";
import Playlist from "./components/playlistspage/Playlist";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Routes>
      </div>
      <MusicPlayer />
    </BrowserRouter>
  );
}

export default App;
