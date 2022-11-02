import styles from './QuestionResult.module.css';

import {
  getAnswers,
  questionNumber,
} from '../../redux/questions/questions-selectors';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addAnswers,
  questionNumberIncrement,
  questionNumberDecrement,
} from 'redux/questions/questions-slice';

/*---------------------------------------------- */
export default function QuestionResult({ answer }) {
  const dispatch = useDispatch();

  // const [answers, setAnswers] = useState([]);
  // const [index, setIndex] = useState('0');
  const index = useSelector(questionNumber);
  const answers = useSelector(getAnswers);

  const handleBack = () => {
    dispatch(questionNumberDecrement());
  };
  const handleNext = () => {
    dispatch(questionNumberIncrement());
    dispatch(addAnswers(answer));
    console.log('answers', answers);
  };

  return (
    <>
      <section className={styles.sectionContainer}>
        <button
          className={styles.btnBack}
          type="button"
          name="back"
          onClick={handleBack}
        >
          <svg width={24} height={16}>
            <use href="#arrow"></use>
          </svg>
          Back
        </button>
        {Number(index) + 1 < 12 ? (
          <button
            className={styles.btnNext}
            type="button"
            name="next"
            onClick={handleNext}
          >
            <svg width={24} height={16}>
              <use href="#arrow"></use>
            </svg>
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
      </section>
    </>
  );
}

//  const handleBack = () => {
//  const decrementQuestionIndex = Number(index) - 1;
// setIndex(decrementQuestionIndex);
//  };
/*
   const incrementQuestionIndex = Number(index) + 1;
    setIndex(incrementQuestionIndex);
    if ((randomQuestions.length = 12)) {
    }*/

// const answersArray = btnRadio => randomQuestions[index];
// console.log(answers);

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
