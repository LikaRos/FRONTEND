import PropTypes from 'prop-types';
import styles from './QuestionButton.module.css';

export default function QuestionButton({ options, handleUpdate }) {
  return options.map(item => (
    <button
      className={styles.item}
      type="button"
      name={item.name}
      key={item.id}
      onClick={handleUpdate}
    >
      {item.title}
    </button>
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
