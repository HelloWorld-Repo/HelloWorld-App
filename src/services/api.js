import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: 'http://10.0.0.151:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
