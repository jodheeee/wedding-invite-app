import mapImage from '@/assets/map.png';
import ImageWithBackground from '../components/common/ImageWithBackground';

const InfoTables = () => {
  return (
    <div>
      <table className="mt-15 min-w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f2eb]">
            <th
              className="pl-6 py-11 text-left font-bold border-b border-gray-200"
              colSpan={2}
            >
              자가용 이용 시 (주차 1시간 30분 무료)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-6 py-11 border-b border-gray-300 font-bold w-120">
              예식장 주소
            </td>
            <td className="pl-6 py-11 border-b border-gray-300">
              라비니움
              <br />
              서울 송파구 천호대로 996
            </td>
          </tr>
          <tr>
            <td className="pl-6 py-11 border-b border-gray-300 font-bold">
              공영주차장 안내
            </td>
            <td className="pl-6 py-11 border-b border-gray-300">
              천호역 공영주차장
              <br />
              서울 강동구 천호대로 1026-1
            </td>
          </tr>
          <tr>
            <td className="pl-6 py-11 border-b border-gray-300 font-bold">
              주차장 셔틀버스
            </td>
            <td className="pl-6 py-11 border-b border-gray-300">
              천호역 공영주차장 내부에서 탑승
              <br />
              주차 기둥번호 A,B,C,D 20-60번 운행
            </td>
          </tr>
        </tbody>
      </table>
      <table className="mt-15 min-w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f2eb]">
            <th
              className="pl-6 py-11 text-left font-bold border-b border-gray-200"
              colSpan={2}
            >
              대전 / OOO 지방 셔틀버스 안내
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-6 py-11 border-b border-gray-300 font-bold w-120">
              대희 지인 <br />
              (대전)
            </td>
            <td className="pl-6 py-11 border-b border-gray-300">
              2024-05-03 00시
              <br />
              대전 OOO OOO 앞
            </td>
          </tr>
          <tr>
            <td className="pl-6 py-11 border-b border-gray-300 font-bold w-120">
              영진 지인 <br />
              (OOO)
            </td>
            <td className="pl-6 py-11 border-b border-gray-300">
              2024-05-03 00시
              <br />
              OOO OOO OOO 앞
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Map = () => {
  return (
    <div className="px-20 pt-100 pb-100">
      <p className="text-center font-bold text-xl">오시는 길 안내</p>
      <ImageWithBackground
        src={mapImage}
        alt="map"
        className="mt-20"
      />
      <InfoTables />
    </div>
  );
};

export default Map;
