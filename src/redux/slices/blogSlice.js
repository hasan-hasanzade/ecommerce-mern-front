import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogItems: [],
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogItems: (state, action) => {
      state.blogItems = action.payload;
    },
  },
});

export const { setBlogItems } = blogSlice.actions;

export default blogSlice.reducer;
