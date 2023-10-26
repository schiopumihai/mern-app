import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
// import { middleware } from './middleware';
import { authMiddleware, authReducer, authReducerPath } from '../service/auth';
import { userSlice } from '@/features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [authReducerPath]: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authMiddleware);
  },
  devTools: true,
});
