import { useState, useRef, useEffect } from 'react';
import backgroundMusic from '@/assets/background-music.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isKaKaoBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('KAKAO') > -1) return true;
    return false;
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        if (isKaKaoBrowser() && showMessage) setShowMessage(false);
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isKaKaoBrowser()) {
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative pr-15">
      {showMessage && (isKaKaoBrowser() || !isPlaying) && (
        <p className="absolute right-85 top-7 text-xs text-neutral-400">
          {isKaKaoBrowser()
            ? '배경음악이 재생중 입니다.'
            : '재생 버튼을 눌러, 감동을 더해보세요!'}
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
