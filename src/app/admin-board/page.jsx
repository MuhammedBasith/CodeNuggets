'use client'

import { useState, useEffect } from 'react';
import Login from '../../components/component/Login';
import AdminDashboard from '../../components/component/AdminDashboard';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className='min-h-screen'>
      {isLoggedIn ? <AdminDashboard onLogout={handleLogin} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default Home;
