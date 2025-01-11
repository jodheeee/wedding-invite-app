import { useState } from 'react';
import ImagesDialog from '../components/common/ImagesDialog';

const Gallery = () => {
  const images = Array(8).fill(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const layout = [
    { cols: 2, images: [0, 1] },
    { cols: 1, images: [2] },
    { cols: 2, images: [3, 4] },
    { cols: 3, images: [5, 6, 7] },
  ];

  return (
    <div className="px-20 pt-110">
      <div className="grid gap-2 relative w-full h-full">
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
                className="w-full h-160 bg-[#efe6cf] rounded-md flex justify-center items-center cursor-pointer"
                onClick={() => openPopup(imgIndex)}
              >
                이미지 {imgIndex}
              </div>
            ))}
          </div>
        ))}
      </div>
      {isOpen && (
        <ImagesDialog
          images={images}
          activeIndex={currentImageIndex}
          onClose={() => setIsOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
          onPrev={() =>
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
