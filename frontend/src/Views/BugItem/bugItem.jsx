import React, { useEffect } from 'react';
import classNames from 'classnames';
import priorityController from '../../Controllers/priorityController';
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
  const { level, color } = priorityController(priority);

  const handleClickBugItem = () => {
    clicked(_id);
  };

  useEffect(() => {
    // console.log(props);
  }, []);

  return (
    <li className='bug-item' onClick={handleClickBugItem}>
      <h3 className='bug-item-title'>{title}</h3>
      <h4
        title={`Priority level: ${level}`}
        className={classNames(['bug-item-priority', level.toLowerCase()])}
        style={{ backgroundColor: color }}>
        {level}
      </h4>
      <h5 className='bug-item-version'>{version}</h5>
      <time className='bug-item-time'>{time}</time>
    </li>
  );
}
