import api from "./api";

const login = async ({ email, password }) => {
    console.log(email, password);
    await api.post("login", {
        email,
        password,
    })
    .then((response) => {
        return response?.data;
    })
    .catch((error) => {
        return error?.response?.data;
    });
};

export default {
  login,
};
