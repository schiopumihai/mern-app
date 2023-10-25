import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const selectToken = (state: any): string => state.user.accessToken;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setUser } = userSlice.actions;
