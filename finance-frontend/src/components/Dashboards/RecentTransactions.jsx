import moment from 'moment';
import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h5>
        <button className="card-btn group" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base " />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type == 'expense' ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format('DD MMM YYYY')}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
