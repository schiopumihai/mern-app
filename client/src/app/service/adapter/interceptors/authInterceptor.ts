import { type InternalAxiosRequestConfig } from 'axios';
import { store } from '@/app/store/store';
import { selectToken } from '@/features/user/userSlice';

export const authInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken = selectToken(store.getState());

  config.headers.Authorization = `Barer ${accessToken}`;

  return config;
};
