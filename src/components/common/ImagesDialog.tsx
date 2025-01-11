import React from 'react';
import nextIconImage from '@/assets/next-icon.png';
import prevIconImage from '@/assets/prev-icon.png';

interface ImagesDialogProps {
  images: unknown[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImagesDialog: React.FC<ImagesDialogProps> = ({
  // images,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40 rounded-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[-30px] text-[25px] right-3 text-white text-lg"
        >
          ✕
        </button>
        <div className="w-full md:h-[55vh] h-[80vh] bg-slate-300 flex justify-center items-center">
          이미지 {activeIndex}
        </div>
        <div className="absolute w-full top-[47%]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-0 w-38 h-38 bg-black/10 rounded-sm"
          >
            <img
              src={prevIconImage}
              className="brightness-0 invert m-auto"
              width={23}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-0 w-38 h-38 bg-black/10 rounded-sm"
          >
            <img
              src={nextIconImage}
              className="brightness-0 invert m-auto"
              width={23}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesDialog;
