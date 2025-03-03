import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onClose, onExpenseAdded, expenseToEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
  });

  //Function to format ISO date to YYYY-MM-DD
  const formatDate = (isoString) => {
    return isoString ? new Date(isoString).toISOString().split('T')[0] : '';
  };

  //pre-fill the form with existing expense data
  useEffect(() => {
    if (expenseToEdit) {
      setFormData({ ...expenseToEdit, date: formatDate(expenseToEdit.date) }); // convert to YYYY-MM-DD format
    }
  }, [expenseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseFloat(value) || '' : value, //Convert amount to number
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validate the form data
    if (
      !formData.name ||
      !formData.amount ||
      !formData.date ||
      !formData.category
    ) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      if (expenseToEdit) {
        //Update the expense
        const response = await axios.put(
          `http://localhost:3000/api/expenses/${expenseToEdit._id}`,
          formData
        );
        onExpenseAdded(response.data, true); //Pass true to indicate an update
      } else {
        //Add  a new expense
        const response = await axios.post(
          'http://localhost:3000/api/expenses',
          formData
        );
        onExpenseAdded(response.data, false); //Pass false to indicate a new expense
      }
      onClose();
    } catch (error) {
      alert('Failed to save expense. Please try again.'); //Show error to the user
      console.error('Error saving expense', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">
          {expenseToEdit ? 'Edit Expense' : 'Add Expense'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            name="amount"
            type="number"
            step="0.01" // allows decimal values
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
          />
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {expenseToEdit ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
