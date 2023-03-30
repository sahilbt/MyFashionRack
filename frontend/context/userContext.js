import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = cookies.get('user');
    if (storedUser && Object.keys(storedUser).length > 0) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      cookies.set('user', JSON.stringify(user), { path: '/' });
    }
    setIsLoading(false)
  }, [user,]);

  return (
    <AppContext.Provider value={{ user, setUser, isLoading, setIsLoading}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}