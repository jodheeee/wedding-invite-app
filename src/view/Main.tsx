import dayjs from 'dayjs';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE_TIME, WEDDING_VENUE } from '../constant';

const Main = () => {
  return (
    <div className="flex flex-col items-center pt-80 gap-45">
      <p className="text-2xl">저희 결혼합니다</p>
      <div className="px-60 w-full">
        <div className="flex items-center justify-center w-full bg-[#efe6cf] rounded-md h-360">
          이미지
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">
          {GROOM_NAME} | {BRIDE_NAME}
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 text-lg">
        <p className="font-semibold">
          {dayjs(WEDDING_DATE_TIME).format('YYYY년 MM월 DD일 HH시')}
        </p>
        <p>•</p>
        <p className="font-semibold">{WEDDING_VENUE.NAME}</p>
        <p>
          <a
            className="text-sky-500 underline cursor-pointer text-sm"
            target="_blank"
            rel="noopener noreferrer"
            href={WEDDING_VENUE.MAP_LINK}
          >
            {WEDDING_VENUE.ADDRESS}
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center w-full py-60 mt-20 gap-10 bg-[#f4f2eb]">
        <p>대충 감동적인 말들...</p>
        <p>쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라</p>
        <p>대충 감동적인 말들...</p>
        <p>쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라</p>
      </div>
    </div>
  );
};

export default Main;
