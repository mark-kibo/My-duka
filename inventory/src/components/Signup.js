import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

function SignUp() {
  const [refreshPage, setRefreshPage] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  function handleLogInClick() {
    navigate('/login');
  }

  YupPassword(Yup);
  const errorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Username too short!')
      .max(50, 'Username too long')
      .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().password().min(8),
    confirmPassword: Yup.string()
      .required('Please retype your password')
      .oneOf([Yup.ref('password')], 'Passwords do not match!'),
    full_name: Yup.string().required('Full Name is required'),
    role: Yup.string()
      .required('Role is required')
      .oneOf(['merchant', 'admin', 'clerk'], 'Invalid role'),
    store_id: Yup.number().required('Store ID is required'),
  });

  return (
    <>
      <div className='flex flex-col items-center justify-center p-20'>
        <h1 className='font-bold text-2xl mb-8'> Sign Up</h1>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            full_name: '',
            role: ' ', 
            store_id: 0,
          }}
          validationSchema={errorMessagesSchema}
          onSubmit={({ confirmPassword, e, ...values }) => {
            fetch('http://127.0.0.1:5000/signup/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then((response) => {
                if (response.ok) {
                  // Assuming values.role is one of 'merchant', 'admin', or 'clerk'
                  const loginRoute = `/login/${encodeURIComponent(values.role)}`;
                  navigate(loginRoute);
                  setRefreshPage(!refreshPage);
                  enqueueSnackbar('Account created successfully', { variant: 'success' });
                } else {
                  return response.json();
                }
              })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            e.resetForm();
          }}
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

              <label className='m-2 font-bold' htmlFor='email'>
                Email
              </label>
              <Field type='text' name='email' id='email' className='text-rich-black px-2 rounded' />
              {touched.email && errors.email && <div className='text-indian-red'>{errors.email}</div>}

              <label className='m-2 font-bold' htmlFor='password'>
                Password
              </label>
              <Field type='password' name='password' id='password' className='text-rich-black px-2 rounded' />
              {touched.password && errors.password && (
                <div className='text-indian-red'>{errors.password}</div>
              )}

              <label className='m-2 font-bold' htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <Field
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                className='text-rich-black px-2 rounded'
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div className='text-indian-red'>{errors.confirmPassword}</div>
              )}

              <label className='m-2 font-bold' htmlFor='full_name'>
                Full Name
              </label>
              <Field type='text' name='full_name' id='full_name' className='text-rich-black px-2 rounded' />
              {touched.full_name && errors.full_name && (
                <div className='text-indian-red'>{errors.full_name}</div>
              )}

              <label className='m-2 font-bold' htmlFor='role'>
                Role
              </label>
              <Field
                as='select'
                name='role'
                id='role'
                className='text-rich-black px-2 rounded'
              >
                <option value='merchant'>merchant</option>
                <option value='admin'>admin</option>
                <option value='clerk'>clerk</option>
              </Field>
              {touched.role && errors.role && <div className='text-indian-red'>{errors.role}</div>}

              <label className='m-2 font-bold' htmlFor='store_id'>
                Store ID
              </label>
              <Field
                type='number'
                name='store_id'
                id='store_id'
                className='text-rich-black px-2 rounded'
              />
              {touched.store_id && errors.store_id && (
                <div className='text-indian-red'>{errors.store_id}</div>
              )}

              <Button type='submit' content='Sign Up' className='text-sm my-5 mx-auto px-1 py-2 w-2/6' />
            </Form>
          )}
        </Formik>
        <p>
          Already Registered?{' '}
          <span className='font-bold' onClick={handleLogInClick}>
            Log In Here
          </span>
        </p>
      </div>
    </>
  );
}

export default SignUp;
