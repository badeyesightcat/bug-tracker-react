import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    admin: false,
    loggedIn: true,
  },
  reducers: {
    signIn: (state, action) => {
      const { username, password } = action.payload;
      state.loggedIn = true;
      state.admin = true;
      console.log(state, username, password);
    },
    signOut: (state) => {
      state.loggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { signIn, signOut, createUser } = slice.actions;
export default slice.reducer;
