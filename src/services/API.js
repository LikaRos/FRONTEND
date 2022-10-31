import axios from 'axios';
const { BASE_URL } = process.env;
export const API = axios.create(BASE_URL);

export const tokenAuth = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};
