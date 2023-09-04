import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
        console.log(state)
      }

      

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.newPrice * obj.count + sum;
      }, 0);
    },
    decreaseItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.newPrice;
      }
    },
    removeItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
         if (findItem) {
            state.totalPrice -= findItem.newPrice * findItem.count;
         }
         state.items = state.items.filter((obj) => obj.id !== action.payload);
    }
  },
});

export const { addItem, removeItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;
