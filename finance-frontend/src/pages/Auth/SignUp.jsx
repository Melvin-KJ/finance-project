import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    //initialize navigate
    const navigate  = useNavigate() 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form>
          {/* Username input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <User className="text-green-700 mx-3" />
            <input
              type="text"
              name="username"
              id="username"
              className="w-full p-3 outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <Mail className="text-green-700 mx-3" />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <Lock className="text-green-700 mx-3" />
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-3 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit button */}
          <div className="mb-6 flex justify-center">
            <button
            onClick={()=>navigate('/login')}
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
