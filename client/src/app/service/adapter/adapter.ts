import { getAccessToken } from '@/app/store/store';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

export const adapter = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

adapter.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Barer ${accessToken}`;
  }

  return config;
});
