import { createSlice } from '@reduxjs/toolkit';
import { getRandomQuestions, getResult } from './questions-operations';

const initialState = {
  questions: [],
  answers: [],
  result: {},
  loading: false,
};

const question = createSlice({
  name: 'questions',
  initialState,
  extraReducers: {
    [getRandomQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload.result;
      state.loading = false;
    },
    [getRandomQuestions.pending]: (state, _) => {
      state.loading = true;
    },
    [getRandomQuestions.rejected]: (state, _) => {
      state.loading = false;
    },
    [getResult.fulfilled]: (state, { payload }) => {
      state.result = payload.result;
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

export default question.reducer;
