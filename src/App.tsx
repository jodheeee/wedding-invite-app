import { useState, useEffect } from 'react';
import ModuleView from './components/layout/ModuleView';
import useSwipeNavigation from './hooks/useSwipeNavigation';
import Intro from './view/Intro';
import Main from './view/Main';
import Gallery from './view/Gallery';
import TabBar from './components/common/TabBar';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const ANIMATION_DURATION_MS = 380;

  const screens = [
    { component: <Intro />, label: 'Intro', hideTab: true },
    { component: <Main />, label: '메인' },
    { component: <Gallery />, label: '사진' },
  ];

  const visibleTabs = screens.filter((screen) => !screen.hideTab);

  const adjustedIndex = visibleTabs.findIndex(
    (screen) => screen.label === screens[visibleIndex].label,
  );

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, screens.length - 1));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation({
    onNext: handleNext,
    onPrevious: handlePrevious,
  });

  useEffect(() => {
    if (isAnimating) {
      const timeoutId = setTimeout(() => {
        setVisibleIndex(currentIndex);
        setIsAnimating(false);
      }, ANIMATION_DURATION_MS);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    if (currentIndex === 0) {
      const timeoutId = setTimeout(() => {
        setIsAnimating(true);
        setCurrentIndex(1);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]);

  const handleTabClick = (index: number) => {
    const targetLabel = visibleTabs[index].label;
    const targetIndex = screens.findIndex((screen) => screen.label === targetLabel);
    if (targetIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(targetIndex);
  };

  return (
    <ModuleView
      footer={
        !screens[visibleIndex].hideTab && (
          <TabBar
            tabs={visibleTabs.map((screen) => screen.label)}
            currentIndex={adjustedIndex}
            onTabClick={handleTabClick}
          />
        )
      }
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`h-full w-full transition-opacity duration-${ANIMATION_DURATION_MS} ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {screens[visibleIndex].component}
      </div>
    </ModuleView>
  );
};

export default App;
