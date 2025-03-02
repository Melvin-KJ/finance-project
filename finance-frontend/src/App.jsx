import './App.css';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashbaord from './pages/Dashboard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashbaord />} />
      </Routes>
    </>
  );
}

export default App;
