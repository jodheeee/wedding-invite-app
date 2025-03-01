import { useState } from 'react';
import dayjs from 'dayjs';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE_TIME, WEDDING_VENUE } from '../constant';
import mainImage from '@/assets/main.jpg';
import subMainImage from '@/assets/sub-main.jpg';
import BackgroundMusic from '../components/common/BackgroundMusic';

const Main = () => {
  const TOTAL_IMAGES = 2;
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const mediaLoaded = loadedImages === TOTAL_IMAGES;

  return (
    <div className="mt-15 min-h-900">
      <div style={{ opacity: mediaLoaded ? 1 : 0, transition: 'opacity 1s ease' }}>
        <BackgroundMusic />
        <p className="text-center text-4xl font-MapoDacapo mt-30">Our wedding day</p>
        <p className="text-center text-[12px] mt-3">
          {GROOM_NAME} & {BRIDE_NAME}
        </p>
        <div className="flex flex-col items-center gap-90 mt-15">
          <img
            src={mainImage}
            alt="main image"
            onLoad={handleImageLoad}
            className="w-full"
          />
          <div className="text-center border-black border-y-1 px-35 py-10 text-[15px]">
            <p>{dayjs(WEDDING_DATE_TIME).format('YYYY년 M월 D일 토요일 오후 h시')}</p>
            <p className="mt-3">{WEDDING_VENUE.NAME}</p>
          </div>
          <img
            src={subMainImage}
            alt="sub main image"
            onLoad={handleImageLoad}
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center w-full gap-6 mt-30 text-[15px]">
          <p>그대가 잡아 준 손이 참 따뜻합니다.</p>
          <p>오랫동안, 아주 오랫동안</p>
          <p>같은 곳을 바라보며 걸어가고 싶습니다.</p>
          <p className="text-xs mt-12">- 함께, 서윤덕 -</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
