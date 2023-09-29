import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
