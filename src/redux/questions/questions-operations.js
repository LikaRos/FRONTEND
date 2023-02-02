import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/API';

export const getRandomQuestions = createAsyncThunk(
  'questions/random',
  async (type, { rejectedWithValue }) => {
    try {
      const { data } = await API.get(`questions/${type}/random`);

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
      const { data } = await API.post('questions/result', answers);

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
      const { data } = await API.get('questions/result', answers);

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
