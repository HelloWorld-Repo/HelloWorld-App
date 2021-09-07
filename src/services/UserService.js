import api from './api';

const registerUser = async ({ confirmPassword, ...data }) => {
  return api
    .post('register', {
      ...data,
      isAdmin: false,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const updateUser = async(data) => {
  return api
    .patch('user', {
      ...data,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
}

const deleteUser = async() => {
  return api
    .delete('user')
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
}

export default {
  registerUser,
  updateUser,
  deleteUser
};
