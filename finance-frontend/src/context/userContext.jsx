import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const userContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  //function to fetch the latest user data
  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/profile', { withCredentials: true });
      setUser(data);
    } catch (error) {
      console.log('Error fetching user', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Runs only once when the component is mounted

  return (
    <userContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </userContext.Provider>
  );
}
