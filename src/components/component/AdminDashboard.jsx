'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const AdminDashboard = ({ onLogout }) => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter()

  useEffect(() => {
    const fetchPendingUsers = async () => {
      const token = localStorage.getItem('token');
      if (token){
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/pending-registrations`, {
          method: 'GET',
          headers: {
            'Authorization': token
          }
        });
        const data = await response.json();
  
        if (response.status === 200) {
          setPendingUsers(data);
        } else {
          alert('Failed to fetch pending registrations.');
        }
      }
    };

    fetchPendingUsers();
  }, []);

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter(id => id !== userId);
      } else {
        return [...prevSelected, userId];
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    onLogout(false)
  }

  const applyChanges = async () => {
    const token = localStorage.getItem('token');
    const usersToUpdate = selectedUsers.map(userId => {
      const user = pendingUsers.find(user => user.id === userId);
      return { userId: user.id, email: user.email, fullName: user.fullName };
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/confirm-payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ users: usersToUpdate })
    });

    if (response.status === 200) {
      setPendingUsers(pendingUsers.filter(user => !selectedUsers.includes(user.id)));
      setSelectedUsers([]);
    } else {
      alert('Failed to confirm payments.');
    }
  };

  const filteredUsers = pendingUsers.filter(user => {
    const query = searchQuery.toLowerCase();
    return (
      user.fullName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.phoneNumber.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-gray-100 max-w-screen-lg w-full">
        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Pending Registrations</h1>
          <input
            type="text"
            placeholder="Search by name, email, or phone number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border rounded w-full max-w-md mx-auto block"
          />
          <ul className="space-y-4">
            {filteredUsers.map(user => (
              <li key={user.id} className="p-4 bg-white rounded shadow flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                    className="mr-2 h-6 w-6"
                  />
                  <p><strong>Name:</strong> {user.fullName}</p>
                </div>
                <p><strong>Email:</strong> {user.email}</p>
                {user.referralCode && (
                  <p><strong>Referred by:</strong> {user.referralCode}</p>
                )}
                <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                <p><strong>College:</strong> {user.collegeName}</p>
                <p><strong>Referred:</strong> {user.referred.length}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={applyChanges}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
              disabled={selectedUsers.length === 0}
            >
              Apply All Changes
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
