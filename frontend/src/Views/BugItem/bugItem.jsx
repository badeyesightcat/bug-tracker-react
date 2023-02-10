import React, { useEffect } from 'react';
import './bugItem.css';

export default function BugItem({ clicked, ...props }) {
  const {
    _id,
    title,
    details,
    steps,
    version,
    priority,
    assigned,
    creator,
    time,
    key,
  } = props;

  const handleClickBugItem = () => {
    clicked(_id);
  };

  useEffect(() => {
    // console.log(props);
  }, []);

  return (
    <li className='bug-item flex flex-col' onClick={handleClickBugItem}>
      <h3 className='bug-item-title'>{title}</h3>
      <h4 className='bug-item-priority'>{priority}</h4>
      <h5 className='bug-item-version'>{version}</h5>
      <time className='bug-item-time'>{time}</time>
    </li>
  );
}
