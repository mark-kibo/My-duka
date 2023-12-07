import React, { useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['user_id', 'username', 'email', 'full_name', 'role', 'store_id'];

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
        const usersWithIds = data.map((user, index) => ({ ...user, id: user.user_id || index }));
      setUsers(usersWithIds);
      console.log('Users after fetch:', usersWithIds);
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

  const handleDeactivateUser = (userId) => {
    
    console.log('Deactivate user with ID:', userId);
  };

  const columns = VISIBLE_FIELDS.map((field) => ({
    field,
    headerName: field.replace('_', ' ').toUpperCase(),
    flex: 1,
  }));

  
  columns.push({
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 200,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDeleteUser(params.row.user_id)}
          style={{ marginRight: '8px' }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => handleDeactivateUser(params.row.user_id)}
        >
          Deactivate
        </Button>
      </div>
    ),
  });

  return (
    <div className="user-table-container" style={{ padding: '20px' }}>
      <Button onClick={handleAddAdmin} className="add-admin-button" style={{ marginBottom: '20px' }}>
        Add Admin
      </Button>

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

      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={3}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(selection) => {
            setSelectedUserId(selection.selectionModel[0] || null);
          }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}


export default UserTable;
