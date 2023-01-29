import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		getUsers: (state) => {
			state.push({ name: 'Ryan Beasley' });
			state.push({ name: 'Jane Mann' });
		},
	},
});

export const { getUsers } = slice.actions;
export default slice.reducer;
