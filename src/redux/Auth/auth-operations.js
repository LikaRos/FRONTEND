import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from '../../services/API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('users/signup', async credentials => {
  const { data } = await API.post('/api/auth/users/signup', credentials);
  return data;
});

export const logIn = createAsyncThunk('users/login', async credentials => {
  try {
    const { data } = await API.post('/api/auth/users/login', credentials);

    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Server error, please try again later');
    }
    if (error.response.status !== 401) {
      toast.error('Wrong email or password, please try again.');
    }
  }
});

export const logOut = createAsyncThunk('users/logout', async () => {
  try {
    await API.get('/api/auth/users/logout');
    tokenAuth.unset();
  } catch {
    toast.error('Server error, please try again later');
  }
});

// export const getRefresh = createAsyncThunk(
//   'auth/refresh',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();
//     const oldRefresh = state.auth.refreshToken;
//     if (!oldRefresh || !oldSid) {
//       return rejectWithValue('something went wrong');
//     }
//     try {
//       const { data } = await API.post('/auth/refresh', {
//         headers: {
//           Authorization: `Bearer ${oldRefresh}`,
//         },
//       });

//       tokenAuth.set(data.newAccessToken);
//       return data;
//     } catch (error) {
//       tokenAuth.unset();
//       if (error.response.status !== 401) {
//         toast.error('Oops, we got an error :(((( Dont worry and try again.');
//       }
//       return rejectWithValue('something went wrong');
//     }
//   }
// );
