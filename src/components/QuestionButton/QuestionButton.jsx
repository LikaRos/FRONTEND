import { useDispatch, useSelector } from 'react-redux';

// import styles from './QuestionButton.module.css';
import { Link } from 'react-router-dom';
import { getRandomQuestions } from 'redux/questions/questions-operations';

import { getQuestions } from 'redux/questions/questions-selectors';

import {
  clearAnswers,
  questionNumberReset,
} from 'redux/questions/questions-slice';

const options = [
  {
    name: 'tech',
    title: 'QA technical training',
    id: 1,
  },
  {
    name: 'theory',
    title: 'Testing theory',
    id: 2,
  },
];

const QuestionButton = () => {
  const dispatch = useDispatch();
  let type = null;

  const randomQuestions = useSelector(getQuestions);

  const handleChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'tech':
        type = 'tech';
        break;

      case 'theory':
        type = 'theory';
        break;

      default:
        return;
    }

    if (randomQuestions.length === 0) {
      dispatch(getRandomQuestions(type));
      console.log('type', type);
      return;
    }

    if (randomQuestions[0].type !== type) {
      dispatch(clearAnswers());
      dispatch(questionNumberReset());
      dispatch(getRandomQuestions(type));
      console.log('type', type);
      console.log('!!!!!!!!!!!qweqwe');
      return;
    }
  };

  return (
    <>
      {options.map(item => (
        <Link
          onClick={handleChange}
          name={item.name}
          id={item.id}
          key={item.id}
          to="/test"
        >
          {item.title}
          <svg width={24} height={16}>
            <use href="#arrow"></use>
          </svg>
        </Link>
      ))}
      ;
    </>
  );
};

export default QuestionButton;
