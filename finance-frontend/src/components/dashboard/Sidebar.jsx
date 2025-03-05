import React, { useEffect } from 'react';
import {
  LayoutDashboard,
  PiggyBank,
  CreditCard,
  ReceiptText,
  Settings,
  LogOut,
  MoreVertical,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';

const Sidebar = ({ activeTab, onTabChange }) => {
  const { user, fetchUser } = useContext(userContext); //Access the user data from context

  useEffect(() => {
    fetchUser();
  }, []); // Fetch the latest user data when the Navbar component is mounted

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'expenses', icon: CreditCard, label: 'Expenses' },
    { id: 'budget', icon: PiggyBank, label: 'Budget' },
    { id: 'transaction', icon: ReceiptText, label: 'Transactions' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-black w-64 shadow-lg h-screen flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white uppercase italic ">
          MoneySentry
        </h2>
      </div>
      <nav className="mt-4 px-4 flex-1">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`rounded-sm shadow-md flex items-center w-full px-4 py-2  mt-4  ${
              activeTab === id
                ? 'bg-primarycolor text-white'
                : 'bg-defaultblack text-gray2 '
            }
            `}
          >
            <Icon className="w-5 h-5 mr-2" />
            {label}
          </button>
        ))}
      </nav>

      {/* Logout button */}
      <div className="px-4">
        <Link
          to="/"
          className="flex items-center w-full px-4 py-2 mb-2 text-gray2 bg-defaultblack"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Link>
      </div>

      {/* Profile Section */}
      <div className="bg-black p-4 flex items-center w-full border-t border-gray-700">
        {/* Profile Image */}
        <img
          src="/avatar.svg"
          alt="Profile"
          className="w-10 h-10 rounded-full bg-gray-600"
        />
        <div className="ml-3 flex-1">
          <p className="text-white text-md font-medium">
            {user?.name || 'Guest'}
          </p>
          <p className="text-white font-thin text-xs">View profile</p>
        </div>
        <MoreVertical className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
