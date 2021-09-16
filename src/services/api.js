import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  // baseURL: 'http://192.168.0.120:3000',
  timeout: 10000,
  timeoutErrorMessage: 'Isso está demorando mais do que deveria, você pode tentar de novo?',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
