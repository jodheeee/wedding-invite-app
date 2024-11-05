import dayjs from 'dayjs';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE_TIME, WEDDING_VENUE } from '../constant';
import dividerSeparateSymbol from '@/assets/divider-separate-symbol.svg';

const Main = () => {
  const getDDay = () => {
    const weddingDate = dayjs(WEDDING_DATE_TIME);
    const today = dayjs();
    const differenceInDays = weddingDate.diff(today, 'day');

    return `D-${differenceInDays}`;
  };

  return (
    <div className="h-full flex flex-col items-center px-30 pt-10">
      <p className="text-center text-rose-300 text-lg font-extrabold">{getDDay()}</p>
      <div className="flex-grow flex items-center justify-center w-full bg-slate-300 rounded-md mt-10 max-h-[60vh]">
        이미지
      </div>
      <div className="text-center mt-15 pb-20 flex-grow-0">
        <p className="text-lg font-semibold">
          신랑 {GROOM_NAME} | 신부 {BRIDE_NAME}{' '}
        </p>
        <div className="mt-15 text-">
          <p>대충 감동적인 말들...</p>
          <p>쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라</p>
          <p>대충 감동적인 말들...</p>
          <p>쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라</p>
        </div>
        <p className="mt-25 font-semibold">
          {dayjs(WEDDING_DATE_TIME).format('YYYY년 MM월 DD일 HH시')}
        </p>
        <p className="text-sm">•</p>
        <p className="font-semibold">{WEDDING_VENUE.NAME}</p>
        <p className="text-sm">
          (
          <a
            className="text-sky-500 underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={WEDDING_VENUE.MAP_LINK}
          >
            {WEDDING_VENUE.ADDRESS}
          </a>
          )
        </p>
        <img
          className="mt-35"
          src={dividerSeparateSymbol}
          alt="dividerSeparateSymbol"
        />
      </div>
    </div>
  );
};

export default Main;
