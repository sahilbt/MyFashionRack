import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = cookies.get('user');
    if (storedUser && Object.keys(storedUser).length > 0) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    cookies.set('user', JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}