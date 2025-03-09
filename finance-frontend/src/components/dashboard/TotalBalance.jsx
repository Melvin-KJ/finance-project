import React from 'react';
import { Ellipsis, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TotalBalance = ({ accounts }) => {
  //calcalute total balance
  const totalBalance = accounts.reduce(
    (sum, account) => sum + Number(account.accountAmount),
    0
  );

  return (
    <div>
      <h1 className="text-white text-lg font-semibold bg-gradient-to-r from-emerald-500 to-indigo-300 rounded-lg p-2 mb-2">
        Total Balance
      </h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-2">
          <h2 className="text-xl font-extrabold">₹{totalBalance}</h2>
          <p className="text-defaultblack">All Accounts</p>
        </div>

        {/* Custom Swiper Slider */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          modules={[Navigation]}
        >
          {accounts.map((account, index) => (
            <SwiperSlide key={index}>
              <div className=" flex items-center justify-between p-4 bg-primarycolor text-white opacity-70 rounded-sm shadow">
                <div>
                  <p className="text-sm text-gray2">Account Type</p>
                  <p className="font-extrabold">{account?.accountType}</p>
                  <p className="text-sm text-gray2">{account?.accountNumber}</p>
                </div>
                <div>
                  <p>{account?.accountProvider}</p>
                  <p className="font-extrabold">₹{account?.accountAmount}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-row cursor-pointer prev-btn">
            <ChevronLeft className="w-5 h-5" />
            <p className="text-sm">Previous</p>
          </div>

          <Ellipsis className="w-8 h-8" />
          <div className="flex flex-row cursor-pointer next-btn">
            <p className="text-sm">Next</p>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
