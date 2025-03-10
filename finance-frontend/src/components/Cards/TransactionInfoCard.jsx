import React from 'react';
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from 'react-icons/lu';

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () =>
    type === 'income' ? 'bg-green-600 text-white' : 'bg-red-600 text-white';

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-4 bg-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all">
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex items-center justify-between ">
        <div>
          <p className="text-sm text-black font-semibold ">{title}</p>
          <p className="text-black text-sm mt-1 ">{date}</p>
        </div>

        <div className={`flex items-center gap-2`}>
          {!hideDeleteBtn && (
            <button
              className="text-gray-800 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={onDelete}
            >
              <LuTrash2 size={18} />
            </button>
          )}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()} `}
          >
            <h6 className="text-sx font-medium">
              {type == 'income' ? '+' : '-'} ${amount}
            </h6>
            {type == 'income' ? (
              <LuTrendingUp size={16} />
            ) : (
              <LuTrendingDown size={16} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
