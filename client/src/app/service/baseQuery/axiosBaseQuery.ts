import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
// import { setUser } from '@/features/user/userSlice';
import { adapter } from '../adapter';

export const axiosBaseQuery = (
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
> => {
  return async ({ url, method, data, config }) => {
    try {
      // @ts-expect-error fix later
      const result = await adapter?.[method](base + url, data, config);

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};
