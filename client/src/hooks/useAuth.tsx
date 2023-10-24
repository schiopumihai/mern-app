import { useContext } from 'react';
import { AuthContext, type IAuthContext } from '@/context/AuthProvider';

export const useAuth = (): IAuthContext => {
  const auth = useContext(AuthContext);

  return auth;
};
