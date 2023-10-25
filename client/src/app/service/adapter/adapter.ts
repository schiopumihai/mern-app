import axios from 'axios';
import { authInterceptor } from './interceptors/authInterceptor';

const BASE_URL = 'http://localhost:5000/';

export const adapter = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

adapter.interceptors.request.use(authInterceptor);
