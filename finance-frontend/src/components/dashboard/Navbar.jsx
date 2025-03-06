import React, { useEffect } from 'react';
import { Bell } from 'lucide-react';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';

const Navbar = () => {
  const { user, fetchUser } = useContext(userContext); //Access the user data from context

  useEffect(() => {
    fetchUser();
  }, []); // Fetch the latest user data when the Navbar component is mounted

  return (
    <div className="h-16 bg-gradient-to-r from-emerald-500 to-blue-400 p-4 shadow-sm flex items-center justify-between ">
      <h1 className="text-2xl font-bold text-white">
        Hello, {user?.name || 'Guest'} 👋
      </h1>
      <div className="flex items-center space-x-4">
        <p className="text-gray-600 font-medium"></p>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6" color='white'/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
