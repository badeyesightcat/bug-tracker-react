import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';
import './sidebar.css';

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleSignOut = () => {
    dispatch(signOut);
  };

  return (
    <aside className='sidebar flex flex-col'>
      <Link to='/' className='has-brandname'>
        <h1 className='brandname small dark' title='Go Home'>
          landscape
        </h1>
      </Link>
      <nav className='gnb'>
        <ul className='gnb-menu-list flex flex-col'>
          <li>
            <Link className='nav-link' to='/'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/viewBugs'>
              Bugs List
            </Link>
          </li>
          {auth.admin && (
            <li>
              <Link className='nav-link' to='/createBug'>
                Create Bug
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <button type='button' className='btn-signOut' onClick={handleSignOut}>
        Sign Out
      </button>
    </aside>
  );
};
