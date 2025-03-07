import React from 'react';
import { ChevronRight } from 'lucide-react';

const Accounts = () => {
  //dummy accounts data to test the working
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
      {/* Header section */}
      <h1 className="text-white text-lg font-semibold bg-gradient-to-r from-emerald-500 to-indigo-300 rounded-lg p-2 mb-2">
        Balances
      </h1>
      {/* Border */}
      <div className="border border-gray-700 mb-2"></div>
      {/* Accounts Card Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Accounts Card */}
        {accounts.map((account) => (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center border-b border-gray-700 mb-2 pb-2">
              <p className="text-lg font-semibold">{account.type}</p>
              <p>{account.provider}</p>
            </div>
            <p className="text-xl font-bold pt-2 mb-1">{account.number}</p>
            <p className="text-lg font-medium text-gray1 mb-2">
              Account Number
            </p>
            <p className="text-xl font-bold mb-1">₹{account.balance}</p>
            <p className="text-lg font-medium text-gray1 mb-2">Total Amount</p>
            <div className="flex items-center justify-between ">
              <button className="text-lg font-medium text-primarycolor">
                Remove
              </button>
              <div className="flex items-center text-white bg-primarycolor px-3 py-2 rounded-md cursor-pointer">
                <button>Details</button>
                <ChevronRight />
              </div>
            </div>
          </div>
        ))}

        {/* Account Add/Edit section */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <div className="flex flex-col items-center">
            <button className='text-white text-lg font-semibold bg-primarycolor px-6 py-2 mb-4 rounded-lg '>Add Accounts</button>
            <button className='text-black text-lg font-medium'>Edit Accounts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
