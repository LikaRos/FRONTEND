import PropTypes from 'prop-types';
import { QuotationListItem } from 'components/QuotationListItem/QuotationListItem';
import styles from './QuotationList.module.css';

export function QuotationList({ quotations }) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.quoteList}>
        {quotations.map(({ id, author, quotation, description }) => (
          <QuotationListItem
            key={id}
            id={id}
            author={author}
            quotation={quotation}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
}

QuotationList.propTypes = {
  QuotationListItem: PropTypes.arrayOf(
    PropTypes.shape({
      quotation: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
