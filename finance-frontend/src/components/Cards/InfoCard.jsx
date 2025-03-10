import React from 'react';

const InfoCard = ({ icon, label, value, gradient }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-xl shadow-lg border border-gray-200/40 ${gradient} bg-opacity-80 backdrop-blur-md transition-transform duration-300 hover:scale-105`}
    >
      <div className="absolute top-3 right-3 text-white text-xs font-semibold bg-black/20 px-2 py-1 rounded-md">
        {label}
      </div>

      <div className="w-16 h-16 flex items-center justify-center text-[28px] text-white bg-white/20 rounded-full shadow-lg">
        {icon}
      </div>

      <div className="mt-4 text-2xl font-bold text-white">₹{value}</div>
    </div>
  );
};

export default InfoCard;
