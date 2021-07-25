import api from './api';

const registerUser = async (data) => {
  return api.post('register', {
    ...data
  })
  .then((response) => {
    return response?.data?.data;
  })
  .catch((error) => {
    throw error?.response?.data;
  });
};

export default {
  registerUser,
};
