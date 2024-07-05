'use client'

import { useState } from 'react';
import Login from '../../components/component/Login';
import AdminDashboard from '../../components/component/AdminDashboard';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <AdminDashboard /> : <Login onLogin={setIsLoggedIn} />}
    </div>
  );
};

export default Home;
