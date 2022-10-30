import { useSelector } from 'react-redux';
import { getRandomQuestion } from '../../redux/questions/questions-selectors';

export default function QuestionTicket({ i = 0 }) {
  let index = Number(i);

  const randomQuestion = useSelector(getRandomQuestion);

  return (
    <>
      {question[index] && (
        <div>
          <p>{question[index].question}</p>

          <ul key={question[index]._id}>
            {question[index].answers.map((answer, i) => {
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
