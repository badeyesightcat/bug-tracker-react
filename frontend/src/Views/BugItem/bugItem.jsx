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
    <li className='bug-item' onClick={handleClickBugItem}>
      <h3 className='bug-item-title'>{title}</h3>
      <strong className='bug-item-priority'>{priority}</strong>
      <strong className='bug-item-version'>{version}</strong>
      <time className='bug-item-time'>{time}</time>
    </li>
  );
}
