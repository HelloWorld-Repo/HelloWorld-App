import api from './api';

const getAbstractData = async () => {
  return await api.get('abstract');
};

export default {
  getAbstractData,
};
