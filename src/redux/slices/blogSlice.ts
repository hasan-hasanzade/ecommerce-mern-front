import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from '../../axios';
import { Status } from './productSlice';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const { data } = await axios.get<Blog[]>('/blogs');
  return data as Blog[];
});

type Blog = {
  _id: string;
  imageUrl: string;
  title: string;
  date: number;
  month: string;
  author: string;
  text: string;
  mainText: string;
};

interface BlogSliceState {
  blogItems: Blog[],
  status: Status
}



const initialState: BlogSliceState = {
  blogItems: [],
  status: Status.LOADING,
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogItems: (state, action) => {
      state.blogItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = Status.LOADING;
        state.blogItems = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.blogItems = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.status = Status.ERROR;
        state.blogItems = [];
      });
  },
});

export const blogSelector = (state: RootState) => state.blogs;

export const { setBlogItems } = blogSlice.actions;

export default blogSlice.reducer;
