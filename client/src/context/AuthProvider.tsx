import React, {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface User {
  username: string;
}

export interface IAuthContext {
  auth?: User;
  setAuth?: Dispatch<SetStateAction<User>>;
}

export const AuthContext = createContext<IAuthContext>({});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState({ username: '' });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
