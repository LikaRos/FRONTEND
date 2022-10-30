import QuestionTicket from 'components/QuestionTicket/QuestionTicket';
import { getRandomQuestions } from 'redux/questions/questions-operations';

export default function QuestionPage() {
  const dispatch = useDispatch();
  const testTech = useSelector(getTechTest);
  const theoryTest = useSelector(getTheoryTest);
  const isLogin = useSelector(getIsLoggedIn);
  const handleResult = () => {
    const questions = [];
    dispatch(getRandomQuestions(questions));
  };
  return <></>;
}
