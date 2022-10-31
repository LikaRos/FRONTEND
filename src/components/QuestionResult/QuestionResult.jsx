import {
  getAnswers,
  getRandomQuestions,
  questionNumber,
} from '../../redux/questions/questions-selectors';
import { getAnswerResult } from 'redux/questions/questions-operations';
import { QuestionTicket } from 'components/QuestionTicket/QuestionTicket';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  addAnswers,
  questionNumberIncrement,
} from 'redux/questions/questions-slice';

/*---------------------------------------------- */
export default function QuestionResult({ answer }) {
  const dispatch = useDispatch();
  const randomQuestions = useSelector(getRandomQuestions);
  // const [answers, setAnswers] = useState([]);
  // const [index, setIndex] = useState('0');
  const index = useSelector(questionNumber);
  const answers = useSelector(getAnswers);
  /*1) -найти btnRadio, и все другие кнопки
	2) - методом reduce перебрать радиокнопки и написать  условие,  если btnRadio отмечена (у нее есть индекс), и есть первый вопрос [индекс 0], спредить массив (индекс масива совпадет с индексом ответа) ю создаем объект с номером  
	3)-  Написать функцию   стрелки назад  и вперед
	4) + Ф-ция getResult */

  const btnRadio = document.getElementsByName('answ');
  const btnNext = document.getElementsByName('next');
  const btnBack = document.getElementsByName('back');
  const handleBack = () => {
    const decrementQuestionIndex = Number(index) - 1;
    // setIndex(decrementQuestionIndex);
  };
  const handleNext = () => {
    dispatch(questionNumberIncrement());
    dispatch(addAnswers(answer));
    console.log('answers', answers);

    // const incrementQuestionIndex = Number(index) + 1;
    // setIndex(incrementQuestionIndex);
    // if ((randomQuestions.length = 12)) {
    // }
  };
  // const answersArray = btnRadio => randomQuestions[index];
  // console.log(answers);
  const btnRadios = [];
  // btnRadios.foreach(el => {
  //   if (el.checked) {
  //     setAnswers([
  //       ...answers,
  //       { answer: el.value, _id: randomQuestions[index]._id },
  //     ]);
  //   }
  //   if ((randomQuestions.length = 12)) {
  //     btnNext.disabled = true;
  //   }
  //   if (index === 0) {
  //     btnBack.disabled = true;
  //   }
  // });

  //   const gatherAnswers = (btnRadio) => {
  //     if (btnRadio.checked) {
  //       return randomQuestions[index + 1].question;
  //     }
  //     if (Number(index) > 11) {
  //       btnNext.disabled = true;
  //       setAnswers(...answers, {
  //         _id: randomQuestions[index]._id,
  //         answer: answer,
  //       });
  //     }
  //   };

  // const getResult = () => {
  //   dispatch(getAnswerResult(answers));
  // };

  return (
    <>
      <div>
        <b>Question {Number(index) + 1} / 12 </b>
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
          <Link
            to="/result"
            name="exit"
            // onClick={getResult}
          >
            Finish test
          </Link>
        )}
      </div>
    </>
  );
}
