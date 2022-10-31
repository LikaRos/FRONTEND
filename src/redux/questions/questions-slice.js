import { createSlice } from '@reduxjs/toolkit';
import { getRandomQuestions, getResult } from './questions-operations';

const initialState = {
  questions: [],
  answers: [],
  result: {},
  loading: false,
};

const questionReducer = createSlice({
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
  reducers: {
    addAnswers(state, action) {
      state.answers.push(action.payload);
    },
    clearQuestions(state) {
      state.questions = [];
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
});
export const { addAnswers, clearQuestions, clearAnswers } =
  questionSlice.actions;

export default questionReducer.reducer;
