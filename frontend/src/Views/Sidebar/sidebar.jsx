import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { signOut } from '../../Controllers/Redux/authSlice';
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
      <Link to='/' className='has-brandname'>
        <h1 className='brandname small dark' title='Go Home'>
          landscape
        </h1>
      </Link>
      <nav className='nav-wrapper'>
        <ul className='nav-list flex flex-col'>
          <li>
            <Link
              className={classNames({
                'nav-link': true,
                active: activeItemIdx === 0,
              })}
              onClick={() => setActiveItemIdx(0)}
              to='/'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={classNames({
                'nav-link': true,
                active: activeItemIdx === 1,
              })}
              onClick={() => setActiveItemIdx(1)}
              to='/viewBugs'>
              Bugs List
            </Link>
          </li>
          {auth.admin && (
            <li>
              <Link
                className={classNames({
                  'nav-link': true,
                  active: activeItemIdx === 2,
                })}
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
