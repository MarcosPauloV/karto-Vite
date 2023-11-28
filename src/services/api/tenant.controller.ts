import axios from 'axios';
import { TenantDTO } from 'services/tenantDTO/tenantDTO';

export const getTenant = async (slug: string) => {
  const token = localStorage.getItem('token_tenant')
  try{
  const data = await axios.post(
      `http://localhost:3001/tenant/${slug}`,
      {
        header:{
          token: token
        }
      }
    ).catch((error) => {
      console.log(error.response.data);
    }); 
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
}

export const createTenant = async (payload: TenantDTO) => {
  try {
    const data = await axios.post(
      'http://localhost:3001/tenant',
      {
        nome: payload.name,
        slug: payload.email,
        corPrimaria: payload.primaryColor,
        email: payload.email,
        senha: payload.password
      }
    ).then(() => {
      window.location.href = '/login';
    }).catch((error) => {
      console.log(error.response.data);
    }); 
    return data;
  } catch (error) {
    throw new Error('Erro ao logar! - AuthController ==> ' + error);
  }
}