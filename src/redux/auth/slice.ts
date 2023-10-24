import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../types/statusEnum';
import { AuthSliceState } from '../auth/types';
import { fetchRegister, fetchLogin, fetchAuthMe } from '../auth/asyncActions';

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



export const { logOut, setUserImageUrl } = authSlice.actions;

export default authSlice.reducer;
