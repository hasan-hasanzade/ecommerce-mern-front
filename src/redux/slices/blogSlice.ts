import { Status } from './productSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from '../../axios';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const { data } = await axios.get<Blog[]>('/blogs');
  return data as Blog[];
});

export const fetchSingleBlog = createAsyncThunk('blogs/fetchSingleBlog', async (id: string) => {
  const { data } = await axios.get(`/blogs/${id}`);
  return data as Blog;
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
  blogItems: Blog[];
  blogItem: Blog | null;
  status: Status;
}

const initialState: BlogSliceState = {
  blogItems: [],
  blogItem: null,
  status: Status.LOADING,
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
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
      })
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = Status.LOADING;
        state.blogItem = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.blogItem = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state) => {
        state.status = Status.ERROR;
        state.blogItem = null;
      });
  },
});

export const blogSelector = (state: RootState) => state.blogs.blogItems;

export const blogItemSelector = (state: RootState) => state.blogs.blogItem;

export default blogSlice.reducer;
