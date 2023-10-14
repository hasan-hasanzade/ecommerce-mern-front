import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from '../../axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get<Product[]>('/items');
  return data as Product[];
});

export const fetchSingleProduct = createAsyncThunk('blogs/fetchSingleBlog', async (id: string) => {
  const { data } = await axios.get(`/items/${id}`);
  return data as Product;
});

type Product = {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  rating: number;
  category: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface productSliceState {
  items: Product[];
  singleItem: Product | null;
  status: Status;
}

const initialState: productSliceState = {
  items: [],
  singleItem: null,
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = Status.LOADING;
        state.singleItem = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.singleItem = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = Status.ERROR;
        state.singleItem = null;
      });
  },
});

export const productSelector = (state: RootState) => state.products.items;

export const singleProductSelector = (state: RootState) => state.products.singleItem;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
