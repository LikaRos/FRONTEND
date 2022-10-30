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
  const type = ['tech', 'theory'];
  const handleChange = () => {
    dispatch(getRandomQuestions(type));
  };

  //   const onSubmit = event => {
  //     event.preventDefault();
  //     dispatch(getRandomQuestions());
  //   };

  return options.map(item => (
    //  <form className={styles.form} onSubmit={onSubmit}>
    //    <button
    //      className={styles.item}
    //      type="submit"
    //      name={item.name}
    //      key={item.id}
    //      onClick={handleChange}
    //    >
    //      {item.title}
    //    </button>
    //  </form>

    <Link to="question" id={item.id} onClick={handleChange}>
      {item.title}
      <svg width={24} height={16}>
        <use href="#arrow"></use>
      </svg>
    </Link>
  ));
}
