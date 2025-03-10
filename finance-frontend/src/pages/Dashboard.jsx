import React, { useState, useEffect } from 'react';
import TotalBalance from '@/components/dashboard/TotalBalance';
import Goals from '@/components/dashboard/Goals';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import Accounts from '@/components/balances/Accounts';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import ExpenseList from '@/components/expenses/ExpenseList';
// import BudgetCard from '@/components/budget/BudgetCard';
import { Goal, Plus } from 'lucide-react';
import ExpenseForm from '@/components/expenses/ExpenseForm';
import axios from 'axios';

const Dashbaord = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expenses, setExpenses] = useState([]);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [accounts, setAccounts] = useState([]); //state to store accounts data

  const handleAddExpense = () => {
    setShowExpenseForm(true);
  };

  const handleExpenseAdded = (newExpense) => {
    setExpenses([...expenses, newExpense]); //Updated expenses list
    setShowExpenseForm(false); //Close the modal
  };

  //fetch both expenses and accounts from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expensesRes, accountsRes] = await Promise.all([
          axios.get('http://localhost:3000/api/expenses'),
          axios.get('http://localhost:3000/api/accounts'),
        ]);
        setExpenses(expensesRes.data);
        setAccounts(accountsRes.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const renderedContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Total Balance */}
              {/* Pass the accounts data to the TotalBalance component */}
              <TotalBalance accounts={accounts} />
              {/* Goals */}
              <Goals />
              {/* Upcoming Bills */}
              <UpcomingBills />
            </div>
            {/* Recent Transactions Table View */}
            <RecentTransactions />
          </div>
        );
      case 'balances':
        return (
          <div className="space-y-6">
            <Accounts />
          </div>
        );
      case 'expenses':
        return (
          <div className="space-y-6">
            <ExpenseList
              expenses={expenses}
              setExpenses={setExpenses}
              onAddExpense={handleAddExpense}
            />
            {showExpenseForm && (
              <ExpenseForm
                onClose={() => setShowExpenseForm(false)}
                onExpenseAdded={handleExpenseAdded}
                accounts={accounts}//Pass accounts as prop
              />
            )}
          </div>
        );
      case 'budget':
        return (
          <div className="space-y-6">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800">
              <Plus className="w-4 h-4 mr-2" />
              Create Budget
            </button>
            {/* <div className="grid grid-cols-2 gap-6">
              {budgets.map((budget, index) => (
                <BudgetCard key={index} budget={budget} />
              ))}
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray3">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col">
        {/* Header component */}
        <Navbar />
        <div className="flex-1 p-6 overflow-auto">{renderedContent()}</div>
      </div>
    </div>
  );
};

export default Dashbaord;
