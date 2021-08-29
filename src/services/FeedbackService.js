import api from './api';

const sendFeedback = async (liked, text) => {
  console.log(`Text ..${text}..`)
  return api
    .post('feedback', {
      liked,
      text,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  sendFeedback,
};
