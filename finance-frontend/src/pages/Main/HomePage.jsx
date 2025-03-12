import Navbar from '@/_components/Navbar';
import React from 'react';
import hero from '../../assets/images/hero.svg';
import about from '../../assets/images/about.png';
import cash from '../../assets/images/cash-blog.jpg';
import blog1 from '../../assets/images/income-blog.jpeg';
import blog2 from '../../assets/images/incexp-blog.png';
import blog3 from '../../assets/images/inflation-blog.jpeg';
import board from '../../assets/images/getstarted.svg';
import { Link } from 'react-router-dom';
import Footer from '@/_components/Footer';

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
            <p className="mt-4 mb-6 text-lg text-gray-700 leading-relaxed">
              Effortlessly track your income and expenses, visualize financial
              insights with dynamic charts, and manage your money like a pro.
            </p>
            <Link
              to="/signup"
              className=" bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Get started
            </Link>
          </div>

          {/* hero image */}
          <div className="flex justify-center">
            <img
              src={hero}
              alt="Hero image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex items-center justify-center py-14 px-4">
        <div className="bg-white rounded-xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* about image */}
          <div className="flex justify-center">
            <img
              src={about}
              alt="About image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
          <div className="text-center md:text-left">
            {/* about text */}
            <p className="text-lg font-bold text-yellow-500 mb-2">ABOUT US</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering You to Take Charge of Your{' '}
              <span className="text-yellow-500">Finances</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Managing your finances shouldn't be overwhelming. At{' '}
              <span className="font-semibold text-orange-600">MoneySentry</span>
              , we provide a seamless and intuitive platform to help you track
              your income and expenses effortlessly .
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="flex flex-col items-center justify-center py-14 px-4 bg-orange-400">
        <div className="bg-orange-700 rounded-xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            {/* Blog main content */}
            <p className="text-lg font-bold text-yellow-200 mb-2">OUR BLOG</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Sharing Our Knowledge
            </h1>
            <p className="mt-2 text-md font-bold text-yellow-300 mb-2">NEWS</p>
            <p className=" mt-4 text-lg text-white leading-relaxed">
              Nationwide has sped up its credit decisioning capability by 50%
              after migrating 1.5 million monthly credit decisions across
              mortgages, loans, and cards to the cloud-based Fico Platform.
            </p>
          </div>

          {/* Blog section image */}
          <div className="flex justify-center">
            <img
              src={cash}
              alt="blog1 image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={blog1}
              alt="Blog 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              What is Comprehensive Income and How does it Work?
            </h3>
            <p className="text-gray-600 mt-2 italic">
              Knowing how to calculate comprehensive income is an important
              aspect of managing cash flow and budgeting.When it comes to
              buisness, keeping a record of all your cash inflows and outflows
              is a priority.
            </p>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={blog2}
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Income vs Expenses: The Key to Employee Happiness
            </h3>
            <p className="text-gray-600 mt-2 italic">
              Highlight: Employee wellbeing is the direct consequence of a
              balance between sufficent income and affordable expenses. We've
              often come across the saying,"Money can't buy happiness."
            </p>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={blog3}
              alt="Blog 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Impact of Inflation on Personal Finances
            </h3>
            <p className="text-gray-600 mt-2 italic">
              Due to the impact of inflation on the cost of living, it is often
              referred to as a silent financial predator. This is because it
              causes the value of money to shrink over time as costs gradually
              increases for various goods and services.
            </p>
          </div>
        </div>
      </section>

      {/* Get started section */}
      <section className="flex items-center justify-center py-14 px-4">
        <div className="bg-white rounded-xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* about image */}
          <div className="flex justify-center">
            <img
              src={board}
              alt="dashboard illustration image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
          <div className="text-center md:text-left">
            {/* about text */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Take Control of Your Finances with Ease🚀
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed italic mb-6">
              Track your income, manage expenses, and gain financial
              insights—all in one place.{' '}
              <span className="text-orange-500">Sign up</span> now to access
              your personalized dashboard and start making smarter financial
              decisions today
            </p>
            <Link
              to="/signup"
              className="bg-orange-500 text-white rounded-md px-4 py-3 "
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default HomePage;
