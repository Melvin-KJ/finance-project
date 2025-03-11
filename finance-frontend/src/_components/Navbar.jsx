import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/coins.png';

const Navbar = () => {
  // State for the menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[155px] mx-auto bg-yellow-500 shadow-lg flex items-center justify-between px-4 sm:px-8 lg:px-10">
      <div className="bg-white w-full h-[95px] flex items-center justify-between rounded-xl px-6 py-2 lg:px-10">
        {/* Logo & Brand name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-10 sm-10 sm:w-10" />
          <span className="text-2xl sm:text-xl font-semibold text-orange-700">
            MONEYSENTRY
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 text-black font-medium">
          <li>
            <Link to="/services" className="hover:text-orange-700 bgtransition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-700 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-4">
          <Link
            to="/signup"
            className="px-5 py-2 sm:px-5 sm:py-2.5 bg-gray-300 text-black rounded-lg hover:bg-yellow-500 hover:text-white transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 sm:px-5 sm:py-2.5 text-white bg-black rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-orange-700" />
          ) : (
            <Menu size={28} className="text-orange-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-[155px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-5 py-6">
          <Link
            to="/services"
            className="text-black hover:text-orange-700 transition"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-orange-700 transition"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-black hover:text-orange-700 transition"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-orange-700 transition"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
