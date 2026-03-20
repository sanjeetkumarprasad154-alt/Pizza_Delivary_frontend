import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on initial load
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    
    try {
      // Mock login - Replace with actual API call
      return new Promise((resolve) => {
        setTimeout(() => {
          let userData = null;
          
          // Check for admin credentials
          if (email === 'admin@example.com' && password === 'admin123') {
            userData = { 
              name: 'Admin User', 
              email: email,
              role: 'admin',
              id: 'admin_001'
            };
          } 
          // Regular user login
          else if (email && password) {
            userData = { 
              name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1), 
              email: email,
              role: 'user',
              id: 'user_' + Date.now()
            };
          }
          
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', 'mock-token-' + Date.now());
            setUser(userData);
            toast.success('Login successful! Welcome back!');
            resolve(true);
          } else {
            toast.error('Invalid credentials');
            resolve(false);
          }
          setLoading(false);
        }, 800);
      });
    } catch (error) {
      toast.error('Login failed. Please try again.');
      setLoading(false);
      return false;
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    
    try {
      // Mock registration - Replace with actual API call
      return new Promise((resolve) => {
        setTimeout(() => {
          const userData = { 
            name: name, 
            email: email,
            role: 'user',
            id: 'user_' + Date.now()
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('token', 'mock-token-' + Date.now());
          setUser(userData);
          toast.success('Registration successful! Welcome to Pizza Delivery!');
          resolve(true);
          setLoading(false);
        }, 800);
      });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};