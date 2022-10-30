export const getRandomQuestion = state => state.questions.question;
export const getRightAnswer = state => state.result.correct;
export const getWrongAnswer = state => state.result.incorrect;

console.log(getRightAnswer);
console.log(getWrongAnswer);
