import api from "./api"

const getAbstractData = () => {
  return api.get('abstract')
  .then((response) => {
    return response?.data?.data;
  })
  .catch((error) => {
    throw error?.response?.data;
  });
}

export default {
  getAbstractData
}