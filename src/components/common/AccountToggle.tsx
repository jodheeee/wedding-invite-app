import { useState } from 'react';
import bottomArrowImage from '@/assets/bottom-arrow.svg';
import topArrowImage from '@/assets/top-arrow.svg';

const AccountToggle = ({
  label,
  accountInfo,
  className,
}: {
  label: string;
  accountInfo: string;
  className: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccount = () => {
    setIsOpen((prev) => !prev);
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
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-17 bg-white border border-gray-100 rounded-md mt-2 flex gap-5 flex-col">
          <p className="text-sm text-gray-500 text-center">{accountInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountToggle;
