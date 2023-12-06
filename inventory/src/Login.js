import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginAuth';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    password: '',
    userType: 'admin', // Default userType
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`https://myduka-apis.onrender.com/login/${values.userType.toLowerCase()}`, {
          username: values.username,
          password: values.password,
        });

        const { access_token } = response.data;

        console.log('Login Successful:', response.data.message);
        console.log('Access Token:', access_token);

        // Redirect to the appropriate page based on userType
        navigate(values.userType === 'admin' ? '/admin-panel' : '/merchant-dashboard');
      } catch (error) {
        console.error('Login Error:', error.response ? error.response.data.message : error.message);
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='username'>
              <strong>Username</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              name='username'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.username && <span className='text-danger'> {errors.username}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='userType'>
              <strong>User Type</strong>
            </label>
            <select
              name='userType'
              onChange={handleInput}
              value={values.userType}
              className='form-control rounded-0'
            >
              <option value='admin'>Admin</option>
              <option value='merchant'>Merchant</option>
            </select>
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            <strong>Login</strong>
          </button>
          <p>Do you agree with our terms and conditions?</p>
          <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
