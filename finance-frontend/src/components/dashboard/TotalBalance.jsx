import React from 'react';
import { Ellipsis, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TotalBalance = () => {
  //dummy accounts data to check the working of swiper
  const accounts = [
    {
      type: 'Credit Card',
      number: '**** **** **** 2789',
      balance: '25000',
      provider: 'Visa',
    },
    {
      type: 'Debit Card',
      number: '**** **** **** 5678',
      balance: '15000',
      provider: 'Mastercard',
    },
  ];

  return (
    <div>
      <h1 className="text-gray1 text-xl mb-2">Total Balance</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-2">
          <h2 className="text-xl font-extrabold">₹30000</h2>
          <p className="text-secondarycolor ">All Accounts</p>
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
                  <p className="font-extrabold">{account?.type}</p>
                  <p className="text-sm text-gray2">{account?.number}</p>
                </div>
                <div>
                  <p>
                    {account?.provider == 'Visa' ? (
                      <img src="/Visacard.svg" />
                    ) : (
                      <img src="/Mastercard.svg" />
                    )}{' '}
                  </p>
                  <p className="font-extrabold">₹{account?.balance}</p>
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

          <Ellipsis  className="w-8 h-8" />
          <div className="flex flex-row cursor-pointer next-btn">
            <p className='text-sm'>Next</p>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
