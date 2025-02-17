import React, { useState } from 'react';
import StatCard from '@/components/dashboard/StatCard';
import ExpenseBarChart from '@/components/dashboard/Charts/ExpenseBarChart';
import CategoryPieChart from '@/components/dashboard/Charts/CategoryPieChart';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import ExpenseList from '@/components/expenses/ExpenseList';

const Dashbaord = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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

  const expenses = [
    {
      id: 1,
      name: 'Grocery Shopping',
      amount: 120.5,
      date: '2025-02-15',
      category: 'Food',
    },
    {
      id: 2,
      name: 'Gas',
      amount: 45.0,
      date: '2025-02-14',
      category: 'Transport',
    },
  ];

  const renderedContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <StatCard title="Total Income" amount={12000} type="income" />
              <StatCard title="Total Expenses" amount={8000} type="income" />
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
              onAddExpense={() => {
                /* Handle add expense */
              }}
            />
          </div>
        );
      case 'budget':
        return <div>Budget Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col">
        {/* Header component */}
        <Header activeTab={activeTab} />
        <div className="flex-1 p-6 overflow-auto">{renderedContent()}</div>
      </div>
    </div>
  );
};

export default Dashbaord;
