// import PropTypes from 'prop-types';
// import styles from './QuestionButton.module.css';
import { useDispatch } from 'react-redux';

import { getRandomQuestions } from 'redux/questions/questions-operations';
import { Link } from 'react-router-dom';

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

  const handleChange = async event => {
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
    dispatch(getRandomQuestions(type));
  };

  //   const handleChange = () => {
  //     dispatch(getRandomQuestions(type));
  //   };

  return options.map(item => (
    <Link to="question" id={item.id} onClick={handleChange} key={item.id}>
      {item.title}
      <svg width={24} height={16}>
        <use href="#arrow"></use>
      </svg>
    </Link>
  ));
}
