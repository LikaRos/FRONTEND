import { createSlice } from '@reduxjs/toolkit';
import { getRandomQuestions, getResult } from './questions-operations';

const initialState = {
  questions: [],
  answers: [],
  result: {},
  loading: false,
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  extraReducers: {
    [getRandomQuestions.pending]: (state, _) => {
      state.loading = true;
    },
    [getRandomQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload;
      state.loading = false;
    },
    [getRandomQuestions.rejected]: (state, _) => {
      state.loading = false;
    },
    [getResult.fulfilled]: (state, { payload }) => {
      state.result = payload;
      state.loading = false;
    },
    [getResult.pending]: (state, _) => {
      state.loading = true;
    },
    [getResult.rejected]: (state, _) => {
      state.loading = false;
    },
  },
});

export const questionsReduser = questionSlice.reducer;
