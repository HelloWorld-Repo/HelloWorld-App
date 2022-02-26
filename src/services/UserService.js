import api from './api';

const registerUser = async (user) => {
  return await api.post('register', {
    ...user,
    isAdmin: false,
  });
};

const updateUser = async (user) => {
  return await api.patch('user', user);
};

const deleteUser = async () => {
  return await api.delete('user');
};

const resetPassword = async (email) => {
  return await api.post('reset', { email });
};

const newPassword = async (password) => {
  return await api.post('password', { password });
};

export default {
  registerUser,
  updateUser,
  deleteUser,
  resetPassword,
  newPassword,
};
