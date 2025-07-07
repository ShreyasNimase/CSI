import React, { useRef } from "react";

function MusicPlayer({ previewUrl }) {
  const audioRef = useRef();

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="mt-2">
      <audio ref={audioRef} src={previewUrl} />
      <button
        onClick={togglePlay}
        className="bg-blue-600 px-3 py-1 rounded-full text-xs"
      >
        Play / Pause
      </button>
    </div>
  );
}

export default MusicPlayer;
