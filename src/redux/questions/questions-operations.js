import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getRandomQuestions = createAsyncThunk(
  'questions/getRandomQuestions', //под капотом создаст статусы
  async (type, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get(`questions/${type}/random`);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getResult = createAsyncThunk(
  'questions/getResult',
  async (answers, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
