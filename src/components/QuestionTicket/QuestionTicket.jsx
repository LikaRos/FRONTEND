import { useSelector } from 'react-redux';
import { getRandomQuestions } from '../../redux/questions/questions-selectors';

export default function QuestionTicket({ i = 0 }) {
  let index = Number(i);

  const randomQuestion = useSelector(getRandomQuestions);

  return (
    <>
      {randomQuestion[index] && (
        <div>
          <p>{randomQuestion[index].question}</p>

          <ul key={randomQuestion[index]._id}>
            {randomQuestion[index].answers.map((answer, i) => {
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
}
