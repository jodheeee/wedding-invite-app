import mapImage from '@/assets/map.png';
import ImageWithBackground from '../components/common/ImageWithBackground';
import { WEDDING_VENUE } from '../constant';

const Map = () => {
  return (
    <div className="px-20 pt-75">
      <div className="text-center">
        <p className="text-amber-950">소중한 분들을 초대합니다.</p>
        <p className="text-sm mt-25">오랜 기다림 속에서 저희 두 사람,</p>
        <p className="text-sm mt-3">한 마음 되어 참된 사랑의 결실을</p>
        <p className="text-sm mt-3">맺게 되었습니다.</p>
        <p className="text-sm mt-18">오셔서 축복해 주시면 큰 기쁨이겠습니다.</p>
      </div>
      <div className="mt-30 flex flex-col items-center">
        <div className="text-left">
          <p className="text-xs">
            류영찬 ・ 이은재 <span className="ml-9 mr-3">아들</span> 대희
          </p>
          <p className="text-xs mt-4">
            정재철 ・ 조용애 <span className="ml-15 mr-9">딸</span> 영진
          </p>
        </div>
      </div>
      <p className="text-center md:text-3xl text-2xl font-MapoDacapo mt-85 mb-12">
        - Getting Here -
      </p>
      <ImageWithBackground
        src={mapImage}
        alt="map"
      />
      <InfoTables />
    </div>
  );
};

export default Map;

const InfoTables = () => {
  return (
    <div>
      <table className="mt-10 min-w-full border-collapse">
        <thead>
          <tr>
            <th
              className="pl-5 py-15 text-left border-b-[0.8px] border-gray-200 text-sm font-normal"
              colSpan={2}
            >
              * 자가용 이용 시 (주차 1시간 30분 무료)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm border-b-[0.8px] border-gray-200">
            <td className="pl-6 md:w-150 w-100">예식장 주소</td>
            <td className="pl-6 py-24">
              <p>{WEDDING_VENUE.NAME}</p>
              <p className="mt-4">
                {' '}
                <a
                  className="text-sky-500 underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={WEDDING_VENUE.MAP_LINK}
                >
                  {WEDDING_VENUE.ADDRESS}
                </a>
              </p>
            </td>
          </tr>
          <tr className="text-sm border-b-[0.8px] border-gray-200">
            <td className="pl-6">공영주차장</td>
            <td className="pl-6 py-24">
              <p>천호역 공영주차장</p>
              <p className="mt-4">서울 강동구 천호대로 1026-1</p>
            </td>
          </tr>
          <tr className="text-sm border-b-[0.8px] border-gray-200">
            <td className="pl-6">주차장 셔틀</td>
            <td className="pl-6 py-24">
              <p>천호역 공영주차장 내부에서 탑승</p>
              <p className="mt-4">주차 기둥번호 A,B,C,D 20-60번 운행</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
