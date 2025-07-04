import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Simulate checking authentication state
    // In a real app, this would check localStorage, cookies, or make an API call
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      // Mock authentication check
      const mockUser = localStorage.getItem('user');
      if (mockUser) {
        const userData = JSON.parse(mockUser);
        setUser(userData);
        setIsAuthenticated(true);
        setBalance(userData.balance || 0);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    // Mock login
    const mockUser = {
      id: 1,
      username: credentials.username,
      email: credentials.email || 'user@example.com',
      role: credentials.role || 'USER',
      balance: credentials.balance || 100.50,
      firstName: credentials.firstName || 'John',
      lastName: credentials.lastName || 'Doe'
    };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
    setBalance(mockUser.balance);
    
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    setBalance(0);
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const updateBalance = (newBalance) => {
    if (user) {
      const updatedUser = { ...user, balance: newBalance };
      setUser(updatedUser);
      setBalance(newBalance);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    balance,
    login,
    logout,
    hasRole,
    updateBalance
  };
};