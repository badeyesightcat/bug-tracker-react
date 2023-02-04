import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css';

export default () => {
  const dispatch = useDispatch();
  const [formField, setFormField] = useState({
    username: '',
    password: '',
  });

  const handleFormFieldChange = (e) => {
    setFormField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn(formField));
  };

  return (
    <section className='login-wrap flex justify-center items-center'>
      <form action='' className='login-form flex flex-col'>
        <fieldset className='flex flex-col login-input-section'>
          <legend className='brandname text-center mb-8'>Landscape</legend>
          <input
            type='text'
            name='username'
            placeholder='username'
            onChange={handleFormFieldChange}
            value={formField.name}
            className='login-input'
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleFormFieldChange}
            value={formField.password}
            className='login-input'
          />
        </fieldset>
        <button type='submit' onClick={handleSignIn} className='login-btn'>
          Sign In
        </button>
      </form>
    </section>
  );
};
