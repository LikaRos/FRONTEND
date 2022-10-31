import { useSelector } from 'react-redux';

import { getRandomQuestions } from 'redux/questions/questions-selectors';

export const QuestionTicket = ({ i = 0 }) => {
  let index = Number(i);

  const randomQuestions = useSelector(getRandomQuestions);
  const questionIndex = randomQuestions[index];
  return (
    <>
      {questionIndex && (
        <div>
          <p>{questionIndex.question}</p>

          <ul key={questionIndex._id}>
            {questionIndex.answers.map((answer, i) => {
              return (
                <>
                  <li key={index}>
                    <input
                      name="answ"
                      type="radio"
                      value={answer}
                      id={i}
                      key={i}
                    />
                    {answer}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
