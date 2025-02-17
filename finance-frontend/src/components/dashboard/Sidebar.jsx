import { LayoutDashboard, Receipt, PiggyBank } from 'lucide-react';
import React from 'react';

const Sidebar = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'expenses', icon: Receipt, label: 'Expenses' },
    { id: 'budget', icon: PiggyBank, label: 'Budget' },
  ];

  return (
    <div className="bg-white w-64 shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Money Sentry</h2>
      </div>
      <nav className="mt-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex items-center w-full px-4 py-2 ${
              activeTab === id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <Icon className="w-5 h-5 mr-2" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
