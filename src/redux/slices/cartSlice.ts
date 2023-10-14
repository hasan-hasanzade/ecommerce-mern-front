import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  rating: number;
  category: string;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    decreaseItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj._id === action.payload);

      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj._id === action.payload);
      if (findItem) {
        state.totalPrice -= findItem.price * findItem.count;
      }
      state.items = state.items.filter((obj) => obj._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart.items;

export const { addItem, removeItem, decreaseItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
