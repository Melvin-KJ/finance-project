import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '@/context/userContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === '/logout') {
      handleLogout();
      return;
    }

    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-gradient-to-br from-black to-gray-800 border-r border-gray-700 p-5 text-white sticky top-[61px] shadow-xl z-20">
      <div className="flex flex-col items-center justify-center gap-4 mt-3 mb-7">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-20 h-20bg-gray-300 rounded-full border-4 border-gray-600 "
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}

        <h5 className="text-lg font-medium">{user.fullName || 'Guest'}</h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] font-medium py-3 px-6 rounded-lg mb-3 transition duration-200  ${
            activeMenu === item.label
              ? 'bg-yellow-500 text-gray-900 shadow-md'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } py-3 px-6 rounded-lg mb-3`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl " />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
