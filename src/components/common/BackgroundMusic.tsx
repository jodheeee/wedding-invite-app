import { useState, useRef, useEffect } from 'react';
import backgroundMusic from '@/assets/background-music.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 6000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="relative pr-15">
      {showMessage && !isPlaying && (
        <p className="absolute right-85 top-6 text-xs text-neutral-500">
          재생 버튼을 눌러, 감동을 더해보세요!
        </p>
      )}
      <div className="px-9 pb-2 w-fit border border-black rounded-full cursor-pointer ml-auto">
        <button
          onClick={togglePlay}
          className="text-xs"
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
    </div>
  );
};

export default BackgroundMusic;
