import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';
import { Status } from './productSlice';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params: Record<string, string>) => {
    const { data } = await axios.post('/auth/login', params);
    return data as Data;
  },
);

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params: Record<string, string>) => {
    const { data } = await axios.post('/auth/register', params);
    return data as Data;
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data as Data;
});

type Data = {
  token: string;
  avatarUrl: string;
  fullName: string;
};

interface AuthSliceState {
  data: null | Data;
  status: Status;
  userImageUrl: string;
}

const initialState: AuthSliceState = {
  data: null,
  status: Status.LOADING,
  userImageUrl: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
    },
    setUserImageUrl: (state, action: PayloadAction<string>) => {
      state.userImageUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = Status.ERROR;
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = Status.ERROR;
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = Status.ERROR;
        state.data = null;
      });
  },
});

export const selectorUserImg = (state: RootState) => state.auth;

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);
export const authData = (state: RootState) => state.auth.data;

export const { logOut, setUserImageUrl } = authSlice.actions;

export default authSlice.reducer;
