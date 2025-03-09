import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronRight, SquarePen } from 'lucide-react';
import AccountModal from './AccountModal';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  //fetch accounts from the backend
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/accounts')
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => console.error('Error fetching accounts', error));
  }, []);

  //handle account deletion
  const handleDelete = async (id) => {
    if (!id) return console.error('Account ID is missing');

    try {
      await axios.delete(`http://localhost:3000/api/accounts/${id}`);
      setAccounts((prev) => prev.filter((account) => account._id !== id));
    } catch (error) {
      console.error('Error deleting account', error);
    }
  };

  //handle add account modal submission
  const handleAddAccount = async (newAccount) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/accounts',
        newAccount,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setAccounts((prevAccounts) => [...prevAccounts, response.data]);
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding account', error);
    }
  };

  //handle edit account modal submission
  const handleEditAccount = async (updatedAccount) => {
    if (!updatedAccount._id) return console.error('Account ID is missing');
    try {
      const response = await axios.put(
        `http://localhost:3000/api/accounts/${updatedAccount._id}`,
        updatedAccount,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Update the accounts state with the edited account
      setAccounts((prevAccounts) =>
        prevAccounts.map((account) =>
          account._id === updatedAccount._id ? response.data : account
        )
      );

      setShowEditModal(false);
      setSelectedAccount(null);
    } catch (error) {
      console.error('Error editing account', error);
    }
  };

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
          <div key={account._id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center border-b border-gray-700 mb-2 pb-2">
              <p className="text-lg font-semibold">{account.accountType}</p>
              <p>{account.accountProvider}</p>
            </div>
            <p className="text-xl font-bold pt-2 mb-1">
              {account.accountNumber}
            </p>
            <p className="text-lg font-medium text-gray1 mb-2">
              Account Number
            </p>
            <p className="text-xl font-bold mb-1">₹{account.accountAmount}</p>
            <p className="text-lg font-medium text-gray1 mb-2">Total Amount</p>
            <div className="flex items-center justify-between ">
              <button
                onClick={() => handleDelete(account._id)}
                className="text-lg font-medium text-primarycolor"
              >
                Remove
              </button>
              <div
                className="flex items-center text-white bg-primarycolor px-3 py-2 rounded-md cursor-pointer"
                onClick={() => {
                  setSelectedAccount(account);
                  setShowEditModal(true);
                }}
              >
                <button>Edit</button>
                <SquarePen className="w-5 h-5 ms-2" />
              </div>
            </div>
          </div>
        ))}

        {/* Account Add section */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="text-white text-lg font-semibold bg-primarycolor px-6 py-2 mb-4 rounded-lg "
          >
            Add Account
          </button>
        </div>
      </div>

      {/* Add Account Modal */}
      {showAddModal && (
        <AccountModal
          show={showAddModal}
          title="Add Account"
          onClose={() => setShowAddModal(false)}
          onSave={handleAddAccount}
        />
      )}

      {/* Edit Account Modal */}
      {showEditModal && selectedAccount && (
        <AccountModal
          show={showEditModal}
          title="Edit Account"
          accountData={selectedAccount}
          onClose={() => {
            setShowEditModal(false);
            setSelectedAccount(null);
          }}
          onSave={handleEditAccount}
        />
      )}
    </div>
  );
};

export default Accounts;
