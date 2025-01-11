import React, { useState } from 'react';

interface ImageWithSizeProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithSize: React.FC<ImageWithSizeProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative w-full h-full bg-gray-200 flex items-center justify-center ${className}`}
    >
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-200 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithSize;
