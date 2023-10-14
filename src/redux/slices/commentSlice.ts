import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';
import { Status } from './productSlice';

export const fetchComment = createAsyncThunk('comment/fetchComment', async () => {
  const { data } = await axios.get<Comment[]>('/comments');
  return data as Comment[];
});

export const fetchCommentPost = createAsyncThunk(
   'comment/fetchCommentPost',
   async (text: string) => {
     const { data } = await axios.post<Comment>('/comment/post', { text }); // Return a single comment, not an array
     return data as Comment;
   },
 );

type Comment = {
  _id: string;
  text: string;
  author: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
};

interface CommentSliceState {
  comments: Comment[];
  commentText: string;
  status: Status;
}

const initialState: CommentSliceState = {
  comments: [],
  commentText: '',
  status: Status.LOADING,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentText: (state, action) => {
      state.commentText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.comments = action.payload;
      })
      .addCase(fetchComment.rejected, (state) => {
        state.status = Status.ERROR;
        state.comments = [];
      })
      .addCase(fetchCommentPost.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCommentPost.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.comments.push(action.payload);
      })
      .addCase(fetchCommentPost.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setCommentText } = commentSlice.actions;

export const commentSelector = (state: RootState) => state.comments.comments;
export const commentTextSelector = (state: RootState) => state.comments.commentText;

export default commentSlice.reducer;
