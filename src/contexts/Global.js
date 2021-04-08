import { createContext, useEffect, useState } from 'react';

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUser({ username: storedUsername });
  }, []);

  return (
    <Global.Provider value={{ user, setUser }}>{children}</Global.Provider>
  );
};
