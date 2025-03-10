import React,{useState} from 'react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className=" gap-5 flex items-center justify-between bg-gradient-to-r from-yellow-500 to-orange-400 backdrop-blur-lg  border-b border-gray-200/50  py-4 px-7 sticky top-0 z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-2xl font-extrabold text-black tracking-wide">
        MONEYSENTRY
      </h2>

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-[250px] h-full bg-white shadow-lg rounded-r-lg z-40 transition-transform duration-300">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar