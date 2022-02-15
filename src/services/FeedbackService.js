import api from './api';

const sendFeedback = async (liked, text) => {
  return await api.post('feedback', {
    liked,
    text,
  });
};

export default {
  sendFeedback,
};
