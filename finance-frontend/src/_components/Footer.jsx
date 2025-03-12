import React from 'react';
import logo from '../assets/images/coins.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-violet-200 p-6 rounded-lg">
        {/* Logo & Brand Name */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 mb-2" />
            <h2 className="text-3xl  text-black font-bold">MONEYSENTRY</h2>
          </div>
          <p className="text-md font-medium text-center md:text-left  mt-2">
            2nd Floor, Tech Towers, <br />
            InfoPark, Kochi, Kerala - 682030 <br />
            Email: contact@moneysentry.com <br />
            Phone: +91 98765 43210
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-black transition-all duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-black transition-all duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-black transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg text-black font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3 text-black">
            Subscribe to our Newsletter
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg border border-blue-400 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-4 py-3 rounded-r-lg hover:bg-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
