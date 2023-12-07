// Login.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Button from './Button';
import '../Login.css'
import Main from './Main';


function Login() {
  const { role: urlRole } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Set a default role if no role is provided in the URL
  const role = urlRole || 'merchant';

  const handleSubmit = async (values, { resetForm }) => {
    const authEndpoint = `http://127.0.0.1:5000/login/${role}`;

    try {
      const response = await fetch(authEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;

        // Store the token in localStorage
        localStorage.setItem('authToken', authToken);

        navigate(`/dashboard/${role}`);
        enqueueSnackbar(`Logged in as ${role}`, { variant: 'success' });
      } else {
        enqueueSnackbar('Invalid credentials', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
    }

    resetForm();
  };

  return (
    <>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className='login-form'>
          <label className='input-label' htmlFor='username'>
            Username
          </label>
          <Field type='text' name='username' id='username' className='input-field' />
          {touched.username && errors.username && (
            <div className='error-message'>{errors.username}</div>
          )}

          <label className='input-label' htmlFor='password'>
            Password
          </label>
          <Field type='password' name='password' id='password' className='input-field' />
          {touched.password && errors.password && (
            <div className='error-message'>{errors.password}</div>
          )}

          <Button type='submit' content='Log In' className='submit-button' />
        </Form>
      )}
    </Formik>
    <Main userRole={role}/>
    </>
  );
}

export default Login;