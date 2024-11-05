import { useState } from 'react';

const Gallery = () => {
  // TODO: 8개의 임시 이미지 공간 설정
  const images = Array(8).fill(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const showNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);

  const showPrevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const layout = [
    { cols: 2, images: [0, 1] },
    { cols: 1, images: [2] },
    { cols: 2, images: [3, 4] },
    { cols: 3, images: [5, 6, 7] },
  ];
  return (
    <div className="px-15 pt-15">
      <div className="grid gap-3 relative w-full h-full">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${
              row.cols === 2
                ? 'grid-cols-2'
                : row.cols === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-3'
            } gap-2 ${rowIndex > 0 ? 'mt-2' : ''}`}
          >
            {row.images.map((imgIndex) => (
              <div
                key={imgIndex}
                className="w-full h-[160px] bg-gray-300 rounded-md flex justify-center items-center cursor-pointer"
                onClick={() => openPopup(imgIndex)}
              >
                이미지 {imgIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40 rounded-md"
          onClick={closePopup}
        >
          <div
            className="relative max-w-sm w-full rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-[-35px] text-[25px] right-10 text-white text-lg"
            >
              ✕
            </button>
            <div className="w-full h-[500px] bg-gray-300 rounded-md flex justify-center items-center">
              이미지 {currentImageIndex + 1}
            </div>
            <div className="absolute w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="text-white text-[25px] absolute left-10"
              >
                〈
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="text-white text-[25px] absolute right-10"
              >
                〉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
