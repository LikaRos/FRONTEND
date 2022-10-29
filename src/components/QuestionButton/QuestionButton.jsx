import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './QuestionButton.module.css';

export default function QuestionButton({ options, handleUpdate }) {
  return options.map(item => (
    <Link
      to="/question"
      className={styles.item}
      name={item.name}
      key={item.id}
      onClick={handleUpdate}
    >
      {item.title}
    </Link>
  ));
}

QuestionButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleUpdate: PropTypes.func.isRequired,
};
