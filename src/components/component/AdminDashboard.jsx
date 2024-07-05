'use client'

import { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    const fetchPendingUsers = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/pending-registrations`)
        const data = await response.json()
        console.log(data)
    };
    fetchPendingUsers();
  }, []);

  const confirmPayment = async (userId) => {
    // const userDoc = doc(db, 'registrations', userId);
    // await updateDoc(userDoc, { status: 'paid' });
    // setPendingUsers(pendingUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Pending Registrations</h1>
      <ul>
        {pendingUsers.map(user => (
          <li key={user.id} className="mb-4 p-4 bg-white rounded shadow">
            <p><strong>Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Referred by:</strong> {user.referralCode}</p>
            <button
              onClick={() => confirmPayment(user.id)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Confirm Payment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
