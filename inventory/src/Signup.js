import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './SignupAuth';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://myduka-apis.onrender.com/signup/', {
          username: values.name, 
          password: values.password,
          email: values.email,
          full_name: values.name,
          role: 'merchant',
        });

        console.log('Signup Successful:', response.data.message);
      } catch (error) {
        console.error(
          'Signup Error:',
          error.response ? error.response.data.message : error.message
        );
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Your Name'
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
          </div>
          <button className='btn btn-success w-100 rounded-0'>
            <strong>Register</strong>
          </button>
          <p>Do you agree with our terms and conditions?</p>
          <Link
            to='/'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
