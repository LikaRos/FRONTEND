import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './auth-operations';

export const initialState = {
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.isLogin = true;
    },
  },
  extraReducers: {
    [logIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.isLogin = false;
    },
    // [getRefresh.pending]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    // [getRefresh.fulfilled]: (state, { payload }) => {
    //   state.accessToken = payload.newAccessToken;
    //   state.refreshToken = payload.newRefreshToken;
    //   state.sid = payload.newSid;
    //   state.isLogin = true;
    // },
    // [getRefresh.rejected]: (state, { payload }) => {
    //   state.isLogin = false;
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.sid = null;
    // },
  },
});

export const authReducer = authSlice.reducer;
export const { googleAuth } = authSlice.actions;
