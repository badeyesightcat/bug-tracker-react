import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { signOut } from '../../../Controllers/Redux/authSlice';
import './sidebar.css';

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleSignOut = () => {
    dispatch(signOut);
  };
  const [activeItemIdx, setActiveItemIdx] = useState(null);

  return (
    <aside className='sidebar flex flex-col'>
      <Link to='/'>
        <h1 className='brandname small' title='Go Home'>
          Landscape
        </h1>
      </Link>
      <nav className='nav-wrapper'>
        <ul className='nav-list flex flex-col'>
          <li className={classNames({ active: activeItemIdx === 0 })}>
            <Link
              className='nav-link'
              onClick={() => setActiveItemIdx(0)}
              to='/'>
              Dashboard
            </Link>
          </li>
          <li className={classNames({ active: activeItemIdx === 1 })}>
            <Link
              className='nav-link'
              onClick={() => setActiveItemIdx(1)}
              to='/viewBugs'>
              Bugs List
            </Link>
          </li>
          {auth.admin && (
            <li className={classNames({ active: activeItemIdx === 2 })}>
              <Link
                className='nav-link'
                onClick={() => setActiveItemIdx(2)}
                to='/createBug'>
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
