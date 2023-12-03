import React, { useState } from 'react';

function AdminPanel() {
  // eslint-disable-next-line
  const [adminDetails, setAdminDetails] = useState({
    name: '',
    email: '',
  });

  const [tokenizedLink, setTokenizedLink] = useState('');

  const handleInput = (event) => {
    setAdminDetails((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const generateTokenizedLink = () => {
    // Implement logic to generate a tokenized link (e.g., using a backend service)
    const generatedToken = 'your_generated_token'; // Replace with actual token
    setTokenizedLink(`http://yourapp.com/signup?token=${generatedToken}`);
  };

  const sendTokenizedLink = () => {
    // Implement logic to send the tokenized link to the admin's email (e.g., using a backend service)
    // You may need to integrate with a backend API for this functionality
    console.log('Tokenized link sent:', tokenizedLink);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-50'>
        <h2>Admin Panel</h2>
        <div className='mb-3'>
          <label htmlFor='name'>
            <strong>Admin Name</strong>
          </label>
          <input
            type='text'
            placeholder='Enter Admin Name'
            name='name'
            onChange={handleInput}
            className='form-control rounded-0'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>
          <input
            type='email'
            placeholder='Enter Email'
            name='email'
            onChange={handleInput}
            className='form-control rounded-0'
          />
        </div>
        <button onClick={generateTokenizedLink} className='btn btn-primary w-100 rounded-0'>
          Generate Tokenized Link
        </button>
        {tokenizedLink && (
          <div className='mt-3'>
            <p>
              Tokenized Link: <a href={tokenizedLink}>{tokenizedLink}</a>
            </p>
            <button onClick={sendTokenizedLink} className='btn btn-success w-100 rounded-0'>
              Send Tokenized Link to Admin
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
