import React, { useState, useEffect } from 'react';

const AccountModal = ({ show, onClose, accountData, onSave, title }) => {
  const [formData, setFormData] = useState({
    accountType: '',
    accountProvider: '',
    accountNumber: '',
    accountAmount: '',
    bankName: '',
    branchName: '',
    _id: null,
  });

  useEffect(() => {
    if (accountData) {
      setFormData({
        accountType: accountData.accountType || '',
        accountProvider: accountData.accountProvider || '',
        accountNumber: accountData.accountNumber || '',
        accountAmount: accountData.accountAmount || '',
        bankName: accountData.bankName || '',
        branchName: accountData.branchName || '',
        _id: accountData._id || null,
      });
    }
  }, [accountData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) || 0 : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            placeholder="Account Type"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="accountProvider"
            value={formData.accountProvider}
            onChange={handleChange}
            placeholder="Provider"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Account Number"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="accountAmount"
            value={formData.accountAmount}
            onChange={handleChange}
            placeholder="Balance"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Bank Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            placeholder="Branch Name"
            className="border p-2 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountModal;
