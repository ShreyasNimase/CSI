import React from "react";
function Playlist() {
  const songs = JSON.parse(localStorage.getItem("playlist")) || [];

  const removeSong = (id) => {
    const updated = songs.filter((song) => song.id !== id);
    localStorage.setItem("playlist", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Playlist</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div key={song.id} className="bg-gray-800 p-4 rounded">
            <img
              src={song.album.cover_medium}
              className="rounded"
              alt={song.title}
            />
            <h4 className="text-sm mt-2">{song.title}</h4>
            <button
              onClick={() => removeSong(song.id)}
              className="mt-2 bg-red-600 px-2 py-1 rounded-full text-xs"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Playlist;
