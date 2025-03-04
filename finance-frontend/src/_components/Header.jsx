import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  //intitalize navigate
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* Logo */}
        <img src="./money-sentry.svg" alt="logo" width={40} height={25} />
        <span className="text-green-900 font-bold text-2xl">MoneySentry</span>
      </div>
      {/* Navigation Links */}
      <div className="flex gap-6">
        <a
          href="#Home"
          className="text-green-700 hover:text-green-400  font-bold"
        >
          Home
        </a>
        <a
          href="#benefits"
          className="text-gray-700 hover:text-green-400 font-medium"
        >
          Benefits
        </a>
        <a
          href="#mission"
          className="text-gray-700 hover:text-green-400 font-medium"
        >
          Our mission
        </a>
        <a
          href="#services"
          className="text-gray-700 hover:text-green-400 font-medium"
        >
          Services
        </a>
        <a
          href="#pricing"
          className="text-gray-700 hover:text-green-400 font-medium"
        >
          Pricing
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          onClick={() => navigate('/dashboard')}
          className="rounded-full"
          variant="outline"
        >
          Dashboard
        </Button>
        <Button onClick={() => navigate('/signup')} className="rounded-full">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Header;
