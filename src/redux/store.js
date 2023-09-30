import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
    blogs: blogReducer,
  },
});
