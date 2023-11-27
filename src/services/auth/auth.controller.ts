import axios from 'axios';

import { ForgotPasswordProps } from '@pages/ForgotPassword';
import { LoginProps } from '@pages/Login';
import { RegisterProps } from '@pages/Register';

export const login = async (payload: LoginProps) => {
  try {
    const data = await axios
      .post('http://localhost:3001/auth/login/tenant', 
        {
          email: payload.email,
          senha: payload.password
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then((response) => {
        const token  = response.data.token_acesso;
        const bearerToken = `Bearer ${token}`;
        localStorage.setItem('token_tenant', bearerToken);
        window.location.href = '/';
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
};

export const register = async (payload: RegisterProps) => {
  try {
    const data = await axios.post(
      'http://localhost:3001/tenant',
      {
        nome: payload.name,
        email: payload.email,
        senha: payload.password
      }
    ).then((response) => {
      window.location.href = '/entrar';
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    }); 
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
};

export const forgotPassword = async (payload: ForgotPasswordProps) => {
  try {
    const data = await axios.post(
      'http://localhost:3001/usuario',
      {
        password: payload.password
      }
    ).catch((error) => {
      console.log(error.response.data);
    }); 
    return data;
  } catch (error) {
    throw new Error('Erro ao alterar a senha! - AuthController ==> ' + error);
  }
};

export const loginUser = async (payload: LoginProps) => {
  try {
    const data = await axios
      .post('http://localhost:3001/auth/login/usuario', 
        {
          email: payload.email,
          senha: payload.password
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then((response) => {
        const token  = response.data.token_acesso;
        const bearerToken = `Bearer ${token}`;
        localStorage.setItem('token_tenant', bearerToken);
        window.location.href = '/';
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
};

export const registerUser = async (payload: RegisterProps) => {
  try {
    const data = await axios.post(
      'http://localhost:3001/usuario',
      {
        nome: payload.name,
        email: payload.email,
        senha: payload.password
      }
    ).then((response) => {
      window.location.href = '/entrar';
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    }); 
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
};


export const logout = async () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = async (token: string) => {
  try {
    const data = await axios.post(
      'http://localhost:3000/usuario',
      {
        header:{
          token: token
        }
      }
    ).catch((error) => {
      logout();
      console.log(error.response.data);
    }); 
    return data;

  }catch (error) {
    throw new Error('Erro ao verificar a autenticação! - AuthController ==> ' + error);
  }
};