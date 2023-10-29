import { type InternalAxiosRequestConfig } from 'axios';

export const authInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken = localStorage.getItem('accessToken');

  console.log({ accessToken });

  if (accessToken) {
    config.headers.authorization = `Barer ${accessToken}`;
  }

  return config;
};
