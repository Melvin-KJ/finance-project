import React, { useState } from 'react';
import StatCard from '@/components/dashboard/StatCard';
import ExpenseBarChart from '@/components/dashboard/Charts/ExpenseBarChart';
import CategoryPieChart from '@/components/dashboard/Charts/CategoryPieChart';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';

const Dashbaord = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // data objects like {expenseData, categoryData, budgets, expenses}

  const renderedContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <StatCard title="Total Income" amount={12000} type="income" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* <ExpenseBarChart data={expenseData.monthly}/> */}
              {/* <CategoryPieChart data={categoryData} /> */}
            </div>
          </div>
        );
      case 'expenses':
        return <div>Expenses Content</div>;
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
