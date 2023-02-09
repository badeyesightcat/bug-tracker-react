import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import './login.css';

export default () => {
  const dispatch = useDispatch();
  const [formField, setFormField] = useState({
    username: '',
    password: '',
  });
  const [submitBtnClassName, setSubmitBtnClassName] = useState({
    'login-btn': true,
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

  useMemo(() => {
    setSubmitBtnClassName((prev) => ({
      ...prev,
      readyToSubmit: formField.username !== '' && formField.password !== '',
    }));
  }, [formField]);

  return (
    <section className='login-wrap flex justify-center items-center flex-col'>
      <h1 className='brandname text-center mb-10'>Landscape</h1>
      <form
        action=''
        className='login-form flex flex-col'
        onSubmit={handleSignIn}>
        <fieldset className='flex flex-col login-input-section'>
          <input
            type='text'
            name='username'
            placeholder='username'
            onChange={handleFormFieldChange}
            value={formField.name}
            className='login-input'
            autoComplete='false'
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleFormFieldChange}
            value={formField.password}
            className='login-input'
            autoComplete='false'
          />
        </fieldset>
        <button type='submit' className={classNames(submitBtnClassName)}>
          Sign In
        </button>
      </form>
    </section>
  );
};
