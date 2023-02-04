import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';

export default () => {
  const dispatch = useDispatch();
  const { bug } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bug.length < 1]);

  return (
    <div className='bugs-view'>
      <h2>bug list</h2>
      <ul className='bugs-list'>
        {bug.map((item) => {
          return <li key={item._id}>bug item</li>;
        })}
      </ul>
    </div>
  );
};
