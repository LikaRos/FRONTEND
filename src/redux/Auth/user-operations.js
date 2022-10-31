import { API } from '../../services/API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userGet = createAsyncThunk('user/userGet', async () => {
  const { data } = await API.get('user');
  return data;
});
