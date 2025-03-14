import { useState } from 'react';
import bottomArrowImage from '@/assets/bottom-arrow.svg';
import topArrowImage from '@/assets/top-arrow.svg';

const AccountToggle = ({
  label,
  accountInfoList,
  className,
}: {
  label: string;
  accountInfoList: { id: string; name: string; accountNumber: string; bank: string }[];
  className: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleAccount = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickCopy = (text: string) => {
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {});
  };

  return (
    <div className={className}>
      <div
        className="py-15 w-full bg-slate-100 text-stone-600 flex items-center border justify-center border-gray-200 rounded-md cursor-pointer px-5"
        onClick={toggleAccount}
      >
        <p className="text-sm">{label}</p>
        <img
          src={isOpen ? topArrowImage : bottomArrowImage}
          alt="Toggle"
          className="ml-10 w-12 transition-transform duration-300"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-17 bg-white border border-gray-100 rounded-md mt-2 flex flex-col">
          <ul className="mx-auto">
            {accountInfoList.map((accountInfo) => (
              <li key={accountInfo.id}>
                <p
                  className="text-sm text-gray-500 text-left mb-7"
                  onClick={() => onClickCopy(accountInfo.accountNumber)}
                >
                  <span className="underline cursor-pointer">
                    {accountInfo.accountNumber}
                  </span>{' '}
                  {accountInfo.bank} {accountInfo.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ opacity: showToast ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <div className="fixed md:bottom-20 bottom-35 bg-zinc-600 text-white rounded-lg px-50 py-15">
          <p className="text-sm">계좌번호를 복사했습니다</p>
        </div>
      </div>
    </div>
  );
};

export default AccountToggle;
