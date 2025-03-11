import './App.css';
// Auth
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
// Dashboard
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
// Main
import HomePage from './pages/Main/HomePage';
// react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserProvider from './context/userContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Home />} />}
            />
            <Route
              path="/income"
              element={<ProtectedRoute element={<Income />} />}
            />
            <Route
              path="/expense"
              element={<ProtectedRoute element={<Expense />} />}
            />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      />
    </UserProvider>
  );
}

export default App;

const ProtectedRoute = ({ element }) => {
  //check if token exists in local storage
  const isAuthenticated = localStorage.getItem('token');

  //Redirect to element if authenticated, otherwise redirect to login
  return isAuthenticated ? element : <Navigate to="/login" />;
};
