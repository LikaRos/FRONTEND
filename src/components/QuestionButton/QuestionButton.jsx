import { useDispatch, useSelector } from 'react-redux';

// import styles from './QuestionButton.module.css';
import { Link } from 'react-router-dom';
import { getRandomQuestions } from 'redux/questions/questions-selectors';
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

export default function QuestionButton() {
  const dispatch = useDispatch();
  let type = null;

  const randomQuestions = useSelector(getRandomQuestions);

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
    console.log('randomQuestions[0].type', randomQuestions[0].type);

    if (randomQuestions.length === 0) {
      dispatch(getRandomQuestions(type));
      return;
    }

    if (randomQuestions[0].type !== type) {
      dispatch(clearAnswers());
      dispatch(questionNumberReset());
      dispatch(getRandomQuestions(type));

      return;
    }
  };

  return options.map(item => (
    <Link
      to="/test"
      name={item.name}
      id={item.id}
      onClick={handleChange}
      key={item.id}
    >
      {item.title}
      <svg width={24} height={16}>
        <use href="#arrow"></use>
      </svg>
    </Link>
  ));
}
