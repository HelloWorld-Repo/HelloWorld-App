import api from './api';

const getQuestionsFromChapter = async(chapterId, type, limit = 3) => {
  const params = { limit };

  if (!!chapterId) params.chapterId = chapterId;
  if (!!type) params.type = type;

  return await api.get('questions', { params });
};

const sendAnswers = async (answers) => {
  const promises = [];

  answers.forEach((answer) => {
    promises.push(
      api.post('answer', {
        questionId: answer.questionId,
        correctedAnswer: answer.correctedAnswer,
      })
    );
  });

  await Promise.all(promises);
};

export default {
  getQuestionsFromChapter,
  sendAnswers,
};
