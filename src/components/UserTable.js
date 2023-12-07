import React, { useState, useEffect } from 'react';
import '../UserTable.css';
import {Modal, Input} from 'antd'

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/users/all-users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log('Users after fetch:', data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleAddAdmin = () => {
    if (selectedUserId || (users && users.length > 0)) {
      
      setShowAddAdminModal(true);
    } else {
      console.warn('No user selected to add admin');
    }
  };

  const handleCancelAddAdmin = () => {
    setShowAddAdminModal(false);
    setAdminEmail('');
  };

  const handleConfirmAddAdmin = () => {
    console.log('Add admin for user ID:', selectedUserId, 'with email:', adminEmail);
    
    setShowAddAdminModal(false);
    setAdminEmail('');
  };

  const handleDeleteUser = (userId) => {
    console.log('Delete user with ID:', userId);
  };

  return (
    <div className="user-table-container">
      <button onClick={handleAddAdmin} className="add-admin-button">
        Add Admin
      </button>

      <Modal
        title="Enter Admin Email"
        visible={showAddAdminModal}
        onOk={handleConfirmAddAdmin}
        onCancel={handleCancelAddAdmin}
      >
        <Input
          placeholder="Enter admin email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
        />
      </Modal>

      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Store ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.full_name}</td>
              <td>{user.role}</td>
              <td>{user.store_id}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.user_id)} className="add-admin-button">Delete/Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
