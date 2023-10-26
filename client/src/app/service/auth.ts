import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './baseQuery';

const authService = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery('/auth'),
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: () => {
        // const result = await baseQuery({ method: 'post', url: '/logIn', data });

        // // @ts-expect-error later
        // api?.dispatch(setUser({ accessToken: result?.data?.accessToken }));

        return { method: 'post', url: '/login' };
      },
    }),
  }),
});

export const { useLogInMutation } = authService;
export const {
  reducer: authReducer,
  reducerPath: authReducerPath,
  middleware: authMiddleware,
} = authService;
