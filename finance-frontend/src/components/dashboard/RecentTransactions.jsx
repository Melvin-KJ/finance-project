import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

//sample data for recent transactions
//image need to be insterted later for real data
const transactionsData = [
  {
    id: 1,
    name: 'Freelance Work',
    amount: 5000,
    date: '2025-03-01',
    type: 'Revenue',
  },
  {
    id: 2,
    name: 'Groceries',
    amount: -1200,
    date: '2025-03-02',
    type: 'Expenses',
  },
  {
    id: 3,
    name: 'Salary',
    amount: 25000,
    date: '2025-02-28',
    type: 'Revenue',
  },
  {
    id: 4,
    name: 'Dining Out',
    amount: -1500,
    date: '2025-03-03',
    type: 'Expenses',
  },
];

const RecentTransactions = () => {
  //state to store the filtered transactions
  const [filter, setFiler] = useState('All');

  //filter transactions based on selected tab
  const filteredTransactions = transactionsData.filter((transaction) =>
    filter === 'All' ? true : transaction.type === filter
  );

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2 bg-gradient-to-r from-emerald-500 to-indigo-300 p-4 rounded-lg shadow">
        <h1 className="text-white text-lg font-semibold">
          Recent Transactions
        </h1>
        <div className="flex items-center cursor-pointer hover:opacity-80">
          <button className="text-md text-white font-medium">View All</button>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-4">
          {['All', 'Revenue', 'Expenses'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-bold transition duration-300 ${
                filter === tab
                  ? 'bg-primarycolor text-white shadow-md '
                  : 'text-gray-700 bg-gray-200'
              }`}
              onClick={() => setFiler(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Transactions Table */}
        <div className="overflow-x auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray3 text-left text-gray-700 text-sm uppercase">
                <th className="p-3">Category</th>
                <th className="p-3">Name</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="bg-gray-50 border-b border-gray2"
                  >
                    <td className="p-3">
                      <img
                        src={
                          transaction?.image ||
                          'https://cdn-icons-png.flaticon.com/512/1261/1261163.png'
                        }
                        alt={transaction.name}
                        className="w-10 h-10 rounded-full shadow-md"
                      />
                    </td>
                    <td className="p-3">{transaction.name}</td>
                    <td
                      className={`p-3 font-bold ${
                        transaction.amount < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}
                    >
                      ₹{Math.abs(transaction.amount)}
                    </td>
                    <td className="p-3">{transaction.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
