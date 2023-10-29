import { type Store as StoreType, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { middleware } from './middleware';
import { adapter } from '../service/adapter/adapter';
import { authInterceptor } from '../service/adapter/interceptors/authInterceptor';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
  devTools: true,
});

adapter.interceptors.request.use(authInterceptor);

export type RootState = ReturnType<typeof store.getState>;
export type Store = StoreType<RootState>;
