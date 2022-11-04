import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut } from './auth-operations';
import { userGet } from './user-operations';
// import { signIn, logIn, logOut, getCurrent } from './auth-operations';

export const initialState = {
  token: null,
  isLogin: false,
  user: {
    email: '',
    avatarURL: '',
    verify: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth: (state, { payload }) => {
      state.token = payload.accessToken;
      state.isLogin = true;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
    },
  },
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
    },
    [logIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = true;
      state.user = payload.user;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.user = {};
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.isLogin = false;
      state.user = {};
    },

    [userGet.fulfilled]: (state, { payload }) => {
      state.user.verify = payload.verify;
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
