import React from 'react';
import './bugView.css';

export default function BugView(props) {
  const {
    title,
    details,
    creator,
    time,
    version,
    priority,
    assigned,
    clickClose,
  } = props;

  const handleClickClose = () => {
    clickClose();
  };

  return (
    <div className='drawer-container'>
      <div className='backdrop'></div>
      <div className='drawer has-bug-details'>
        <button
          type='button'
          title='Close the detail view'
          className='btn-close-drawer'
          onClick={handleClickClose}>
          ✕
        </button>
        <h3 className='bug-detail-title'>{title}</h3>
        <p className='bug-detail-explanation'>{details}</p>
        <div className='bug-detail-meta'>
          <span>creator: {creator}</span>
          <span>created on: {time}</span>
        </div>
        <div className='bug-detail-meta'>
          <span>priority: {priority}</span>
          <span>assigned to: {assigned}</span>
          <span>version: {version}</span>
        </div>
      </div>
    </div>
  );
}
