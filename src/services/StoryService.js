import api from './api';

const getModulesAndChapters = async () => {
  return await api.get('modules');
};

const getChapters = async () => {
  return await api.get('chapters');
};

export default {
  getModulesAndChapters,
  getChapters,
};
