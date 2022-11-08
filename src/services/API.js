import axios from 'axios';
export const API = axios.create({
  //   baseURL: 'http://localhost:3001',
  baseURL: 'https://pro-test-team-project.herokuapp.com',
});

export const tokenAuth = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};
