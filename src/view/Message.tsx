import AccountToggle from '../components/common/AccountToggle';
import { BRIDE_NAME, GROOM_NAME } from '../constant';

const Message = () => {
  return (
    <div className="px-15 mt-50">
      <p className="pl-5 pt-15 pb-10 text-left ">
        <span className="pl-5 py-16 text-left text-md">💌</span>{' '}
        <span className="text-sm ml-3">마음 전하실 곳</span>
      </p>
      <div className="pl-9 pb-10">
        <p className="text-xs">축하 화환은 정중히 사양합니다. 감사합니다.</p>
        <p className="text-xs"></p>
      </div>
      <AccountToggle
        label="신랑측"
        accountInfoList={[
          {
            id: 'g1',
            name: GROOM_NAME,
            accountNumber: '110-380-496610',
            bank: '(신한은행)',
          },
          {
            id: 'g2',
            name: '이은재',
            accountNumber: '1166-12-125528',
            bank: '(농협)',
          },
        ]}
        className="px-5"
      />
      <AccountToggle
        label="신부측"
        accountInfoList={[
          {
            id: 'b1',
            name: BRIDE_NAME,
            accountNumber: '302-1485-2176-11',
            bank: '(농협)',
          },
          {
            id: 'b2',
            name: '조용애',
            accountNumber: '352-0606-4195-13',
            bank: '(농협)',
          },
          {
            id: 'b3',
            name: '정재철',
            accountNumber: '676925-94-146475',
            bank: '(국민은행)',
          },
        ]}
        className="px-5 mt-15"
      />
      <p className="text-xs text-center mt-90 mb-20">Created by Dae-Hee, just for you</p>
    </div>
  );
};

export default Message;
