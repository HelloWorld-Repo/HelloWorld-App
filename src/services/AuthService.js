import api from './api';

const login = async ({ email, password }) => {
  return await api
    .post('login', {
      email,
      password,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });
};

export default {
  login,
};
