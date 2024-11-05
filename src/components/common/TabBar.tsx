import React from 'react';

interface TabBarProps {
  tabs: string[];
  currentIndex: number;
  onTabClick: (index: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, currentIndex, onTabClick }) => {
  return (
    <div className="w-full bg-white border-t border-gray-200 flex justify-around py-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabClick(index)}
          className={`flex-1 text-center py-2 ${
            currentIndex === index ? 'text-slate-700 font-bold' : 'text-gray-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
