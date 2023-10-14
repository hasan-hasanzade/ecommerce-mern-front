import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';
import commentReducer from './slices/commentSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
    blogs: blogReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
