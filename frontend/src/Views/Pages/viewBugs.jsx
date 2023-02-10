import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugItem from '../BugItem/bugItem';

export default () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  const handleBugItemClick = (content) => {
    console.log(content);
  };

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  return (
    <div className='page-container theme-light'>
      <h2 className='page-title'>Bugs List</h2>
      <ul className='bugs-list flex flex-wrap'>
        {bugs?.map((item, idx) => (
          <BugItem key={idx} clicked={handleBugItemClick} {...item} />
        ))}
      </ul>
    </div>
  );
};
