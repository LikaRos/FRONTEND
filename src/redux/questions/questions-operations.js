import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/API';
// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getRandomQuestions = createAsyncThunk(
  'questions/random', //под капотом создаст статусы
  async (type, { rejectedWithValue }) => {
    try {
      const { data } = await API.get(`api/questions/${type}/random`);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getAnswerResult = createAsyncThunk(
  'questions/result',
  async (answers, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getResult = createAsyncThunk(
  'questions/result',
  async (answers, { rejectedWithValue }) => {
    try {
      const { data } = await API.get('api/questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
