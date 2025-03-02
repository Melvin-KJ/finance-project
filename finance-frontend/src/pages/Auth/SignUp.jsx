import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //initialize navigate
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', { name, email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: '', email: '', password: '' }); //reset state
        toast.success('User registered successfully');
        navigate('/login');
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong');
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form onSubmit={registerUser}>
          {/* Username input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <User className="text-green-700 mx-3" />
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              name="username"
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
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full p-3 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit button */}
          <div className="mb-6 flex justify-center">
            <button
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
