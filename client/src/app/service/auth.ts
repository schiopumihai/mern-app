import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './baseQuery';

export const authService = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery('/auth'),
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (data) => {
        return { method: 'post', url: '/login', data };
      },
    }),
  }),
});

export const { useLogInMutation } = authService;
