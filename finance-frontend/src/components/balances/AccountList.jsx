import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountModal from './AccountModal';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts', error);
      }
    };
    fetchAccounts();
  }, []);

  const handleEditAccount = async (updatedAccount) => {
    if (!updatedAccount._id) return console.error('Account ID is missing');
    try {
      const response = await axios.put(
        `http://localhost:3000/api/accounts/${updatedAccount._id}`,
        updatedAccount
      );
      setAccounts((prevAccounts) =>
        prevAccounts.map((account) =>
          account._id === updatedAccount._id ? { ...response.data } : account
        )
      );
      setShowEditModal(false);
      setSelectedAccount(null); // Reset selection after editing
    } catch (error) {
      console.error('Error editing account', error);
    }
  };

  return (
    <div>
      <h2>Accounts</h2>
      {accounts.map((account) => (
        <div key={account._id}>
          <p>
            {account.accountType} - {account.accountProvider}
          </p>
          <button
            onClick={() => {
              setSelectedAccount(account);
              setShowEditModal(true);
            }}
          >
            Edit
          </button>
        </div>
      ))}

      <AccountModal
        show={showEditModal}
        title="Edit Account" // Added this line
        onClose={() => setShowEditModal(false)}
        accountData={selectedAccount}
        onSave={handleEditAccount}
      />
    </div>
  );
};

export default AccountList;
