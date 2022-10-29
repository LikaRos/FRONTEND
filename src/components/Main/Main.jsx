// import styles from './Main.module.css';
// import PropTypes from 'prop-types';
import { QuotationList } from 'components/QuotationList/QuotationList';
import quotations from 'components/data/quotations.json';

export default function Main() {
  return (
    <>
      <QuotationList quotations={quotations} />
    </>
  );
}
// Main.propTypes = {
//   author: PropTypes.string.isRequired,
//   quotation: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
