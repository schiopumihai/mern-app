import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './baseQuery';

export const authService = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery('/auth'),
  endpoints: (builder) => ({
    logIn: builder.mutation({
      queryFn: async (payload, api, extraOptions, baseQuery) => {
        const result = await baseQuery({
          method: 'post',
          url: '/login',
          data: payload,
        });

        // @ts-expect-error later
        if (result?.data?.accessToken) {
          // @ts-expect-error later
          localStorage.setItem('accessToken', result?.data?.accessToken);
        }

        return { data: result?.data };
      },
    }),

    logOut: builder.mutation({
      queryFn: async (args, api, extraOptions, baseQuery) => {
        const result = await baseQuery({ method: 'get', url: '/logOut' });

        if (!result.error) {
          localStorage.removeItem('accessToken');
        }

        return result;
      },
    }),
  }),
});

export const { useLogInMutation } = authService;
