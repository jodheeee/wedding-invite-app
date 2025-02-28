import ImageCarousel from '../components/common/ImageCarousel';

const imageModules = import.meta.glob('@/assets/gallery/g-*.jpg', {
  eager: true,
}) as Record<string, { default: string }>;

const images = Object.keys(imageModules)
  .sort((a, b) => {
    const aMatch = a.match(/g-(\d+)\.jpg$/);
    const bMatch = b.match(/g-(\d+)\.jpg$/);
    return Number(aMatch?.[1] || 0) - Number(bMatch?.[1] || 0);
  })
  .map((path) => imageModules[path].default);

const Gallery = () => {
  return (
    <div className="md:px-20 pt-100">
      <ImageCarousel images={images} />
    </div>
  );
};

export default Gallery;
