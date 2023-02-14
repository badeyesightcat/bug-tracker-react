import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../controllers/redux/authSlice';
import './sidebar.css';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleSignOut = () => {
    dispatch(signOut);
  };
  const [activeItemIdx, setActiveItemIdx] = useState(null);

  return (
    <aside className='sidebar flex flex-col'>
      <NavLink to='/'>
        <h1 className='brandname small' title='Go Home'>
          Landscape
        </h1>
      </NavLink>
      <nav className='nav-wrapper'>
        <ul className='nav-list flex flex-col'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/'>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/bugsList'>
              <span>Bugs List</span>
            </NavLink>
          </li>
          {auth.admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to='/createBug'>
                <span>Create Bug</span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <button type='button' className='btn-signOut' onClick={handleSignOut}>
        Sign Out
      </button>
    </aside>
  );
}
