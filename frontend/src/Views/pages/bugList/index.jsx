import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../controllers/redux/bugSlice';
import BugItem from '../../components/bugItem';
import BugView from '../../components/bugView';

export default function BugList() {
  const [detailView, setDetailView] = useState({
    isDisplayed: false,
    info: null,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  const handleBugItemClick = (info) => {
    setDetailView((prev) => ({
      isDisplayed: !prev.isDisplayed,
      info,
    }));
  };

  const handleBugViewCloseClick = () => {
    setDetailView((prev) => ({
      isDisplayed: !prev.isDisplayed,
      info: null,
    }));
  };

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  return (
    <div className='page-container theme-light'>
      <h2 className='page-title'>Bugs List</h2>
      <ul className='bugs-list flex flex-wrap'>
        {bugs?.map((item, idx) => (
          <BugItem
            key={idx}
            clicked={() => handleBugItemClick(item)}
            {...item}
          />
        ))}
      </ul>
      {detailView.isDisplayed && (
        <BugView {...detailView.info} clickClose={handleBugViewCloseClick} />
      )}
    </div>
  );
}
