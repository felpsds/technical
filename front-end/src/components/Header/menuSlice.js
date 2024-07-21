import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    theme: 'light',
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = menuSlice.actions;
export default menuSlice.reducer;