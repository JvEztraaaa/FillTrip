import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('filltrip_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('filltrip_user');
      }
    }
    setLoading(false);
  }, []);

  // Signup function - future-proof for backend integration
  const signup = async (userData) => {
    try {
      // TODO: Replace with actual backend API call
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });
      // const data = await response.json();
      
      // For now, simulate backend response
      const mockUser = {
        id: Date.now().toString(),
        email: userData.email,
        username: userData.username,
        fullName: userData.fullName,
        createdAt: new Date().toISOString()
      };

      // Store user data (in real app, this would be a JWT token)
      localStorage.setItem('filltrip_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    }
  };

  // Login function - future-proof for backend integration
  const login = async (credentials) => {
    try {
      // TODO: Replace with actual backend API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(credentials)
      // });
      // const data = await response.json();

      // For now, check against stored users
      const storedUsers = JSON.parse(localStorage.getItem('filltrip_users') || '[]');
      const user = storedUsers.find(u => u.email === credentials.email);
      
      if (!user) {
        return { success: false, error: 'User not found. Please sign up first.' };
      }

      // In real app, you'd verify password hash here
      if (user.password !== credentials.password) {
        return { success: false, error: 'Invalid password.' };
      }

      // Store current user session
      localStorage.setItem('filltrip_user', JSON.stringify(user));
      setCurrentUser(user);
      
      return { success: true, user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('filltrip_user');
    setCurrentUser(null);
  };

  // Update signup to also store user in users list for login validation
  const signupWithValidation = async (userData) => {
    try {
      // Check if user already exists
      const storedUsers = JSON.parse(localStorage.getItem('filltrip_users') || '[]');
      const existingUser = storedUsers.find(u => u.email === userData.email);
      
      if (existingUser) {
        return { success: false, error: 'User with this email already exists.' };
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        username: userData.username,
        fullName: userData.fullName,
        password: userData.password, // In real app, this would be hashed
        createdAt: new Date().toISOString()
      };

      // Store in users list
      storedUsers.push(newUser);
      localStorage.setItem('filltrip_users', JSON.stringify(storedUsers));

      // Store current session
      localStorage.setItem('filltrip_user', JSON.stringify(newUser));
      setCurrentUser(newUser);
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    currentUser,
    signup: signupWithValidation,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
