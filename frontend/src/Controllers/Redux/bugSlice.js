import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    getBugs: (state) => {
      state.push(...retrieveBugs());
    },
    createBug: (state, action) => {},
    updateBug: (state, action) => {},
    markComplete: (state, action) => {},
  },
});

export const { getBugs, createBug, updateBug, markComplete } = slice.actions;
export default slice.reducer;
