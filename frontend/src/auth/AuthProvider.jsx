// src/context/AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, userType: null });
 
  const login = (token, userType) => {
    // Save token to sessionStorage or cookies
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userType', userType);
    setAuth({ isAuthenticated: true, userType });
  };

  const logout = () => {
    // Remove token from sessionStorage or cookies
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userType');
    setAuth({ isAuthenticated: false, userType: null });
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userType = sessionStorage.getItem('userType');
    if (token && userType) {
      setAuth({ isAuthenticated: true, userType });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
