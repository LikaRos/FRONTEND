import { getRandomQuestion } from '../../redux/questions/questions-selectors';
import { getAnswers } from 'redux/questions/questions-operations';
import QuestionTicket from 'components/QuestionTicket/QuestionTicket';

/*---------------------------------------------- */
export default function QuestionResult() {
  const dispatch = useDispatch();
  // const randomQuestion = useSelector(getRandomQuestion);
  //   const [answer, setAnswer] = useState([]);
  // const [index, setIndex] = useState('0');

  /*1) -найти radioBtn, и все другие кнопки
	2) - методом reduce перебрать радиокнопки и написать  условие,  если radioBtn отмечена (у нее есть индекс), и есть первый вопрос [индекс 0], спредить массив (индекс масива совпадет с индексом ответа) ю создаем объект с номером  
	3)-  Написать функцию   стрелки назад  и вперед
	4) + Ф-ция getResult */

  const handleBack = () => {};
  const handleNext = () => {};

  const getResult = () => {
    dispatch(getAnswers(answers));
  };
  return (
    <>
      <div>
        <p>Question {Number(index) + 1} / 12 </p>
        <QuestionTicket index={index} radioButton={radioButton} />
      </div>
      <div>
        <button type="button" name="back" onClick={handleBack}>
          Back
        </button>
        {Number(index) + 1 < 12 ? (
          <button type="button" name="next" onClick={handleNext}>
            Next
          </button>
        ) : (
          <Link to="/result" name="exit" onClick={getResult}>
            Finish test
          </Link>
        )}
      </div>
    </>
  );
}
