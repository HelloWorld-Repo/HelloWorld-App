import api from './api';

const saveChapterDone = async (chapterId) => {
  return await api.post('history', {
    chapterId,
  });
};

export default {
  saveChapterDone,
};
