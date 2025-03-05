import React from 'react';

const StatCard = ({ title, amount }) => {
  let colorClass = 'text-gray-700';

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className={`text-3xl font-bold ${colorClass} mt-2`}>
        ${amount.toLocaleString()}
      </p>
    </div>
  );
};

export default StatCard;
