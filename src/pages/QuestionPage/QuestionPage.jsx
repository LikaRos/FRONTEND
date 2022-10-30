import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnswers,
  getRandomQuestions,
} from 'redux/questions/questions-selectors';
import {
  addAnswers,
  clearAnswers,
  clearQuestions,
} from 'redux/questions/questions-slice';

export const QuestionPage = () => {
  const questions = useSelector(getRandomQuestions);
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('questions', questions);
    console.log('answers', answers);
  }, [questions, answers]);

  const handleAddAnswer = () => {
    dispatch(addAnswers('answer 1'));
    // console.log('answers', answers);
  };

  const handleClearQuestions = () => {
    dispatch(clearQuestions());
    // console.log('cleared questions', questions);
  };

  const handleClearAnswers = () => {
    dispatch(clearAnswers());
    // console.log('cleared answers', answers);
  };

  return (
    <>
      <div>Запитання дивись у консолі :)</div>;
      <button type="button" onClick={handleAddAnswer}>
        addAnswer
      </button>
      <button type="button" onClick={handleClearQuestions}>
        clearQuestions
      </button>
      <button type="button" onClick={handleClearAnswers}>
        clearAnswers
      </button>
    </>
  );
};
