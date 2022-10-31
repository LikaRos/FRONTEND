import { useSelector } from 'react-redux';

import { getRandomQuestions } from 'redux/questions/questions-selectors';

export const QuestionTicket = ({ i = 0 }) => {
  let index = Number(i);

  const randomQuestions = useSelector(getRandomQuestions);
  const currentQuestion = randomQuestions[index];
  return (
    <>
      {currentQuestion && (
        <div>
          <b>{currentQuestion.question}</b>

          <ul>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={i + 1}>
                  <input
                    name="answ"
                    type="radio"
                    value={answer}
                    id={i}
                    key={i}
                  />
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
