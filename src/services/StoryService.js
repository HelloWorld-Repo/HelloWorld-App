import api from './api';

const getModulesAndChapters = async () => {
  return api
    .get('modules')
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const getChapters = async () => {
  return api
    .get('chapters')
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  getModulesAndChapters,
  getChapters
};
