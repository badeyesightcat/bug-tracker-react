import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const slice = createSlice({
  name: 'bug',
  initialState: [],
  reducers: {
    getBugs: (state) => {
      // state = retrieveBugs();
      retrieveBugs();
    },
    createBug: (state, action) => {},
    updateBug: (state, action) => {},
    markCompleted: (state, action) => {},
  },
});

export const { getBugs, createBug, updateBug, markCompleted } = slice.actions;
export default slice.reducer;
