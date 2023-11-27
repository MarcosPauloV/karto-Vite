export interface authContextProps {
  isAuthenticated: boolean;
  login: (payload: LoginSchema) => void;
  register: (payload: RegisterSchema) => void;
  forgotPassword: (payload: ForgotPasswordSchema) => void;
  logout: () => void;
}