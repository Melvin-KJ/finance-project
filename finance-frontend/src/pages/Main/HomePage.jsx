import Navbar from '@/_components/Navbar';
import React from 'react';
import hero from '../../assets/images/hero.svg'

const HomePage = () => {
  return (
    <div className="bg-yellow-100 min-h-screen">
      {/* Navbar of the Homepage */}
      <Navbar />
      {/* Hero section */}
      <section className="flex items-center justify-center py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            {/* hero text */}

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Take Control of Your Finances with{' '}
              <span className="text-orange-600">MoneySentry</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Effortlessly track your income and expenses, visualize financial
              insights with dynamic charts, and manage your money like a pro.
            </p>
            <button className="mt-6 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md transition">
              Get started
            </button>
          </div>

          {/* hero image */}
          <div className='flex justify-center'>
            <img src={hero} alt="Hero image" className="w-full max-w-sm md:max-w-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
