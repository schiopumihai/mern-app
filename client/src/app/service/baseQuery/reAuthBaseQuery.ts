import { type BaseQueryFn } from '@reduxjs/toolkit/query';
import { type AxiosRequestConfig } from 'axios';
import { adapter } from '../adapter';
import { clearUser, setAccessToken } from '@/features/user/userSlice';

export const reAuthBaseQuery =
  (
    base: string,
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      config?: AxiosRequestConfig;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, config }, api) => {
    // @ts-expect-error fix later
    let result = await adapter[method](base + url, data, config);
    if (result.error && result.error.status === 401) {
      const refreshResult = await adapter.get('/refreshToken');

      if (refreshResult?.data) {
        api.dispatch(setAccessToken(refreshResult.data.accessToken));
        // @ts-expect-error fix later
        result = await adapter[method](base + url, data, config);
      } else {
        api.dispatch(clearUser());
      }
    }
    return result;
  };
