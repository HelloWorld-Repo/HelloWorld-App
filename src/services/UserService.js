import api from './api';

const registerUser = async ({ confirmPassword, ...user }) => {
  return api
    .post('register', {
      ...user,
      isAdmin: false,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const updateUser = async (user) => {
  return api
    .patch('user', {
      ...user,
    })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const deleteUser = async () => {
  return api
    .delete('user')
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const resetPassword = async (email) => {
  return api
    .post('reset', { email })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

const newPassword = async (password) => {
  return api
    .post('password', { password })
    .then((response) => {
      return response?.data?.data;
    })
    .catch((error) => {
      throw error?.response?.data;
    });
};

export default {
  registerUser,
  updateUser,
  deleteUser,
  resetPassword,
  newPassword
};
