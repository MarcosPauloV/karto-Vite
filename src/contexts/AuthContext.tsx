'use client';
import * as controller from '@services/auth/auth.controller';
import { createContext, useState } from 'react';
import { DataProps as ForgotPasswordSchema } from '../app/(public)/forgotpassword/page';
import { DataProps as LoginSchema } from '../app/(public)/login/page';
import { DataProps as RegisterSchema } from '../app/(public)/register/page';
import { authContextProps } from './authContext';

export const AuthContext = createContext({} as authContextProps);

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  
  const [isAuthenticated, setAuthenticated] = useState(false);
  
  const login = (data: LoginSchema) => {
    controller.login(data);
  };
  
  const logout = () => {
    setAuthenticated(false);
    controller.logout();
  };

  const forgotPassword = (data: ForgotPasswordSchema) => {
    controller.forgotPassword(data);
  };

  const register = (data: RegisterSchema) => {
    controller.register(data);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated , login , logout, forgotPassword, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;