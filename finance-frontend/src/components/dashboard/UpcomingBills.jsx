import React from 'react';
import { ChevronRight } from 'lucide-react';

const UpcomingBills = () => {
  return (
    <div>
      <div className="flex items-center justify-between  bg-gradient-to-r from-emerald-500 to-indigo-300 rounded-lg p-2 mb-2">
        <h1 className="text-white text-lg font-semibold">Upcoming Bill</h1>
        <div className="flex items-center">
          <button className="text-md text-white font-medium">View All</button>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>
      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Bill One */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray2">
          {/* Date */}
          <div className="flex flex-col items-center bg-gray2 rounded-md p-2">
            <p>May</p>
            <p className="text-xl font-bold">15</p>
          </div>
          {/* Subscription Details */}
          <div className="flex flex-col">
            <img src="/Figma.svg" alt="Figma" className="w-12 h-6" />
            <p className="text-sm font-bold">Figma - Monthly</p>
            <p className="text-sm">Last Charge - 14 May, 2022 </p>
          </div>
          {/* Amount */}
          <div className="bg-white-500 border-2 border-gray1 px-4 py-2 rounded-lg">
            <p className="font-bold">₹150</p>
          </div>
        </div>

        {/* Bill Two */}
        <div className="flex items-center justify-between pt-2">
          {/* Date */}
          <div className="flex flex-col items-center bg-gray2 rounded-md p-2">
            <p>Jun</p>
            <p className="text-xl font-bold">16</p>
          </div>
          {/* Subscription Details */}
          <div className="flex flex-col">
            <img src="/Adobe.svg" alt="Adobe" className="w-16 h-8" />
            <p className="text-sm font-bold">Adobe - Yearly</p>
            <p className="text-sm">Last Charge - 17 Jun, 2023 </p>
          </div>
          {/* Amount */}
          <div className="bg-white-500 border-2 border-gray1 px-4 py-2 rounded-lg">
            <p className="font-bold">₹559</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;
