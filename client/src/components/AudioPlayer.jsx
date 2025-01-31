import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const audio = new Audio("https://released-3eef78e81e1c.herokuapp.com/submit"); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the audio is playing

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.current.pause(); // Pause the audio
    } else {
      audio.current.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  return (
    <div>
      <audio src="..." />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
