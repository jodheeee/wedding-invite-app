import { useState, useEffect, useCallback } from 'react';

interface UseSwipeNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  wheelDebounceDelay?: number;
}

const useSwipeNavigation = ({
  onNext,
  onPrevious,
  wheelDebounceDelay = 120,
}: UseSwipeNavigationProps) => {
  const [startY, setStartY] = useState(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const diffY = startY - endY;

      if (diffY > 50) onNext();
      else if (diffY < -50) onPrevious();
    },
    [startY, onNext, onPrevious],
  );

  const handleWheel = useCallback(() => {
    let wheelTimeout: NodeJS.Timeout | null = null;

    return (e: WheelEvent) => {
      if (wheelTimeout) clearTimeout(wheelTimeout);

      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) onNext();
        else if (e.deltaY < 0) onPrevious();
      }, wheelDebounceDelay);
    };
  }, [onNext, onPrevious, wheelDebounceDelay])();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') onNext();
      if (e.key === 'ArrowUp') onPrevious();
    },
    [onNext, onPrevious],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  return { handleTouchStart, handleTouchEnd };
};

export default useSwipeNavigation;
