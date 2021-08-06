import api from './api';

const getModulesAndChapters = async (email, password) => {
  return api
    .get('modules')
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  getModulesAndChapters,
};
