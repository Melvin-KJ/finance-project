import React from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { Button } from '../ui/button';

const ExpenseList = ({ expenses, onAddExpense }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Expense History</h3>
        <Button onClick={onAddExpense}>
          <Plus className="w-4 h-4 mr-1" />
          Add Expense
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">Name</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b">
              <td className="py-3">{expense.name}</td>
              <td className="py-3">{expense.amount}</td>
              <td className="py-3">{expense.date}</td>
              <td className="py-3">
                <div className="flex space-x-1">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
