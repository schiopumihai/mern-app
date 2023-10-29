import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type {
  AxiosRequestConfig,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { adapter } from '../adapter';
import { clearUser } from '@/features/user/userSlice';

export const axiosBaseQuery = (
  baseUrl: string,
): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    config?: AxiosRequestConfig;
  },
  unknown,
  unknown
> => {
  return async ({ url, method, data, config }, api) => {
    try {
      // @ts-expect-error fix later
      const result = await adapter[method](baseUrl + url, data, config);

      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      const prevRequest: InternalAxiosRequestConfig | undefined = error.config;

      if (error?.response?.status === 401) {
        try {
          const response = await adapter.get('/auth/refreshToken');
          const { accessToken } = response.data;

          localStorage.setItem('accessToken', accessToken);
          // @ts-expect-error later
          prevRequest.headers.Authorization = `Bearer ${accessToken}`;
          // @ts-expect-error later
          const result = await adapter(prevRequest);
          return { data: result.data };
        } catch (error) {
          await adapter.get('/auth/logOut');
          localStorage.removeItem('accessToken');
          api.dispatch(clearUser());
        }
      }

      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
};
