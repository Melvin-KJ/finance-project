import React, { useEffect, useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';

const ExpenseList = ({ expenses, setExpenses }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editExpense, setEditExpense] = useState(null); //state for editing an expense

  //Open the form to add a new expense
  const handleAddExpense = () => {
    setEditExpense(null);
    setIsFormOpen(true);
  };

  //Open the form to edit an expense
  const handleEditExpense = (expense) => {
    setEditExpense(expense);
    setIsFormOpen(true);
  };

  //handle update expense
  const handleExpenseAdded = (expense, isEdit) => {
    if (isEdit) {
      setExpenses(expenses.map((e) => (e._id === expense._id ? expense : e)));
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  //Delete an expense
  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error('Error deleting expense', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Expense History</h3>
        <Button onClick={handleAddExpense}>
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
            <th className="pb-2">Category</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id} className="border-b">
              <td className="py-3">{expense.name}</td>
              <td className="py-3">₹{expense.amount}</td>
              <td className="py-3">
                {new Date(expense.date).toLocaleDateString()}
              </td>
              <td className="py-3">{expense.category}</td>
              <td className="py-3">
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleEditExpense(expense)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteExpense(expense._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && (
        <ExpenseForm
          onClose={() => setIsFormOpen(false)}
          onExpenseAdded={handleExpenseAdded}
          expenseToEdit={editExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;
