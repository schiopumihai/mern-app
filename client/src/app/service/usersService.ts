import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from './baseQuery';

export const usersService = createApi({
  reducerPath: 'users',
  baseQuery: axiosBaseQuery('/users'),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({ url: '', method: 'get' }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersService;
