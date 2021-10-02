import api from './api';

const saveChapterDone = (chapterId) => {
  return api
    .post('history', {
      chapterId,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  saveChapterDone
}