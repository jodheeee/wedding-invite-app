import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const swipedHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
    trackMouse: false,
  });

  return (
    <>
      <div
        {...swipedHandlers}
        className="relative w-full overflow-hidden"
      >
        <div className="relative md:h-760 h-700">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover md:rounded-md"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-10 top-1/2 transform -translate-y-1/2 text-xs
          bg-gray-500 bg-opacity-25 text-white py-7 pr-8 pl-7 rounded hover:bg-opacity-30"
          onClick={goToPrev}
        >
          ◀︎
        </button>
        <button
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs
          bg-gray-500 bg-opacity-25 text-white py-7 pl-8 pr-7 rounded hover:bg-opacity-30"
          onClick={goToNext}
        >
          ▶︎
        </button>
      </div>
      <p className="font-MapoDacapo font-bold text-sm text-center mt-4">
        {currentIndex + 1} / {images.length}
      </p>
    </>
  );
};

export default ImageCarousel;
