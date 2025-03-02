import React,{useState} from 'react';
import { User, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [data,setData] = useState({
    email:'',
    password:''
  })

 //initialize navigate
    const navigate  = useNavigate() 

    const loginUser = (e) =>{
      e.preventDefault()
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">
          Login to Your Account
        </h2>

        <form onSubmit={loginUser}>
          {/* Email input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <User className="text-green-700 mx-3" />
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
              onClick={() => navigate('/dashboard')}
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-600"
            >
              Log In
            </button>
          </div>

          {/* Redirect to Signup */}
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to={'/signup'} className="text-green-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
