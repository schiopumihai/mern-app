import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './baseQuery';
import { setUser } from '@/features/user/userSlice';

export const authService = createApi({
  // reducerPath: 'auth',
  // baseQuery: axiosBaseQuery('/auth'),
  // endpoints: (builder) => ({
  //   logIn: builder.mutation({
  //     queryFn: async (data, api, _, baseQuery) => {
  //       const result = await baseQuery({ method: 'post', url: '/logIn', data });

  //       // @ts-expect-error later
  //       api?.dispatch(setUser({ accessToken: result?.data?.accessToken }));

  //       return result;
  //     },
  //   }),
  // }),
});

export const { useLogInMutation } = authService;
