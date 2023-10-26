import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

export const selectToken = (state: any): string => state.user.accessToken;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => (state = { ...state, ...payload }),
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    clearUser: (state) => {
      state = { ...initialState };
    },
  },
});

export const { setUser, setAccessToken, clearUser } = userSlice.actions;
