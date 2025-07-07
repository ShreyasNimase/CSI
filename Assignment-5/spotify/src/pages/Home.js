import React, { useEffect, useState } from "react";
import api from "../utils/api";
import SongCard from "../components/SongCard";

function Home() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("eminem");

  const fetchSongs = async (searchQuery) => {
    try {
      const res = await api.get(`/search?q=${searchQuery}`);
      setSongs(res.data.data);
    } catch (err) {
      console.error("API error:", err);
    }
  };

  useEffect(() => {
    fetchSongs(query);
  }, []);

  const addToPlaylist = (song) => {
    const current = JSON.parse(localStorage.getItem("playlist")) || [];
    const updated = [...current, song];
    localStorage.setItem("playlist", JSON.stringify(updated));
    alert("Added to playlist!");
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
          placeholder="Search artist/song..."
        />
        <button
          onClick={() => fetchSongs(query)}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onAdd={addToPlaylist} />
        ))}
      </div>
    </div>
  );
}
export default Home;
