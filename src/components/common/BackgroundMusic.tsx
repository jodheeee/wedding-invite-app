import { useState, useRef } from 'react';
import backgroundMusic from '@/assets/background-music.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="px-15 pb-4 pt-3 w-fit border border-black rounded-full cursor-pointer ml-auto">
      <button
        onClick={togglePlay}
        className="text-sm"
      >
        {isPlaying ? (
          <p>
            <span className="font-extrabold">II</span> Stop
          </p>
        ) : (
          <p>▶︎ Play</p>
        )}
      </button>
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
      />
    </div>
  );
};

export default BackgroundMusic;
