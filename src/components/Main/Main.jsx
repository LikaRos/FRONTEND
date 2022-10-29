// import styles from './Main.module.css';
import PropTypes from 'prop-types';
export default function Main({ author, quotation, description }) {
  return (
    <>
      <div>
        <h3 class="Main_main_author"> {author}</h3>
        <h2 class="Main_main_quote">{quotation}</h2>
        <p class="Main_main_descr">{description}</p>
        {/* <h3 class="Main_main_author"> Джоном Ф. Вудс[</h3>
        <h2 class="Main_main_quote">
          «Пишите код так, как будто сопровождать его будет склонный к насилию
          психопат, который знает, где вы живете.»
        </h2>
        <p class="Main_main_descr">Hacker and computer programmer, 1976 </p> */}
      </div>
    </>
  );
}
Main.propTypes = {
  author: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
