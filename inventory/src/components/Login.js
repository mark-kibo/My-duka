// Login.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Button from './Button';

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values, { resetForm }) => {
    
    const authEndpoint = `http://127.0.0.1:5000/login/${role}`;

    fetch(authEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          
          navigate(`/dashboard/${role}`);
          enqueueSnackbar(`Logged in as ${role}`, { variant: 'success' });
        } else {
          
          enqueueSnackbar('Invalid credentials', { variant: 'error' });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    resetForm();
  };

  return (
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
        <Form className='flex flex-col content-center justify-center max-w-xs w-full'>
          
          <label className='m-2 font-bold' htmlFor='username'>
            Username
          </label>
          <Field type='text' name='username' id='username' className='text-rich-black px-2 rounded' />
          {touched.username && errors.username && (
            <div className='text-indian-red'>{errors.username}</div>
          )}

          <label className='m-2 font-bold' htmlFor='password'>
            Password
          </label>
          <Field type='password' name='password' id='password' className='text-rich-black px-2 rounded' />
          {touched.password && errors.password && (
            <div className='text-indian-red'>{errors.password}</div>
          )}

          <Button type='submit' content='Log In' className='text-sm my-5 mx-auto px-1 py-2 w-2/6' />
        </Form>
      )}
    </Formik>
  );
}

export default Login;
