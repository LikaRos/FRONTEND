import { useSelector } from 'react-redux';
import { getRandomQuestions } from 'redux/questions/questions-selectors';

export const QuestionPage = () => {
  const questions = useSelector(getRandomQuestions);
  console.log('questions', questions);

  return <div>Запитання дивись у консолі :)</div>;
};
