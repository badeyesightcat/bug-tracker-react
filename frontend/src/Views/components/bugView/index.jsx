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
      <div className='drawer has-bug-details grid grid-cols-3 grid-rows-1'>
        <div className='col-span-2'>
          <button
            type='button'
            title='Close the detail view'
            className='btn-close-drawer'
            onClick={handleClickClose}>
            ✕
          </button>
          <h3 className='bug-detail-title'>{title}</h3>
          <p className='bug-detail-explanation'>{details}</p>
        </div>
        <div className='columns-1 flex flex-col gap-8'>
          <div className='bug-detail-meta'>
            <span className='bug-detail-meta-item'>creator: {creator}</span>
            <span className='bug-detail-meta-item'>created on: {time}</span>
            <span className='bug-detail-meta-item'>priority: {priority}</span>
            <span className='bug-detail-meta-item'>
              assigned to: {assigned}
            </span>
            <span className='bug-detail-meta-item'>version: {version}</span>
          </div>
          <button type='button' className='btn-mark-complete'>
            Mark complete
          </button>
        </div>
      </div>
    </div>
  );
}
