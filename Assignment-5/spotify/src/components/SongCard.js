import React from "react";
import MusicPlayer from "./MusicPlayer";

function SongCard({ song, onAdd }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img
        src={song.album.cover_medium}
        className="rounded-lg"
        alt={song.title}
      />
      <h3 className="mt-2 text-sm font-semibold">{song.title}</h3>
      <p className="text-xs text-gray-400">{song.artist.name}</p>
      <button
        onClick={() => onAdd(song)}
        className="mt-2 bg-green-600 px-3 py-1 rounded-full text-xs"
      >
        Add to Playlist
      </button>
      {song.preview && <MusicPlayer previewUrl={song.preview} />}
    </div>
  );
}
export default SongCard;
