import api from './api';

const getQuestionsFromChapter = (chapterId, type, limit = 3) => {
  const params = { limit };

  if (!!chapterId) params.chapterId = chapterId;
  if (!!type) params.type = type;

  return api
    .get('questions', { params })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
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

  await Promise.all(promises)
    .then((response) => response?.data?.data)
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  getQuestionsFromChapter,
  sendAnswers,
};
