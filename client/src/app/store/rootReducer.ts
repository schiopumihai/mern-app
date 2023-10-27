import { userSlice } from '@/features/user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { authService } from '../service/authService';
import { usersService } from '../service/usersService';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [authService.reducerPath]: authService.reducer,
  [usersService.reducerPath]: usersService.reducer,
});
