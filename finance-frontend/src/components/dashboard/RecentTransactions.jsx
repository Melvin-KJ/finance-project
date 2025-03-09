import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  //state to store the filtered transactions
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  //filter transactions based on selected tab
  const filteredTransactions = transactions.filter((transaction) =>
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
          {['All', 'Credit', 'Debit'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-bold transition duration-300 ${
                filter === tab
                  ? 'bg-primarycolor text-white shadow-md '
                  : 'text-gray-700 bg-gray-200'
              }`}
              onClick={() => setFilter(tab)}
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
                <th className="p-3">Type</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction._id}
                    className="bg-gray-50 border-b border-gray2"
                  >
                    <td className="p-3">{transaction.category}</td>
                    <td className="p-3">{transaction.name}</td>
                    <td
                      className={`p-3 font-bold ${
                        transaction.type === 'Debit'
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}
                    >
                      ₹{Math.abs(transaction.amount)}
                    </td>
                    <td className="p-3">
                      {transaction.type === 'Credit' ? 'Revenue' : 'Expenses'}
                    </td>

                    <td className="p-3">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
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
