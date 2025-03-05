import React, { useState, useEffect } from 'react';
import StatCard from '@/components/dashboard/StatCard';
import ExpenseBarChart from '@/components/dashboard/Charts/ExpenseBarChart';
import CategoryPieChart from '@/components/dashboard/Charts/CategoryPieChart';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import ExpenseList from '@/components/expenses/ExpenseList';
import BudgetCard from '@/components/budget/BudgetCard';
import { Plus } from 'lucide-react';
import ExpenseForm from '@/components/expenses/ExpenseForm';
import axios from 'axios';

const Dashbaord = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expenses, setExpenses] = useState([]);
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const handleAddExpense = () => {
    setShowExpenseForm(true);
  };

  const handleExpenseAdded = (newExpense) => {
    setExpenses([...expenses, newExpense]); //Updated expenses list
    setShowExpenseForm(false); //Close the modal
  };

  //fetch expenses from backend
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/expenses')
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error('Error fetching expenses', error));
  }, []);

  // data objects like {expenseData, categoryData, budgets, expenses}

  //sample data to vsualize in dashboard
  const expenseData = {
    monthly: [
      { date: 'Jan', amount: 2400 },
      { date: 'Feb', amount: 2800 },
      { date: 'March', amount: 2200 },
      { date: 'April', amount: 2600 },
    ],
  };

  const categoryData = [
    { name: 'Food', value: 25 },
    { name: 'Transport', value: 35 },
    { name: 'Rent', value: 30 },
    { name: 'Bills', value: 20 },
  ];

  const budgets = [
    {
      emoji: '🍕',
      name: 'Food & Dinning',
      amount: 500,
      spent: 320,
      items: 8,
    },
    {
      emoji: '🚗',
      name: 'Transportation',
      amount: 300,
      spent: 150,
      items: 4,
    },
  ];

  const renderedContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <StatCard />
              <StatCard />
              <StatCard />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ExpenseBarChart data={expenseData.monthly} />
              <CategoryPieChart data={categoryData} />
            </div>
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
            <div className="grid grid-cols-2 gap-6">
              {budgets.map((budget, index) => (
                <BudgetCard key={index} budget={budget} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-lightgray1">
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
