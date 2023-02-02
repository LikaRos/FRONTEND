import axios from 'axios';
export const API = axios.create({
  //   baseURL: 'http://localhost:3001',
  //   baseURL: 'https://pro-test-team-project.herokuapp.com',

  //   baseURL: 'https://teamproject-protest-backend.vercel.app',

  baseURL: 'https://teamproject-protest-backend-impcd6np4-likaros.vercel.app',
});

export const tokenAuth = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};
