import { login } from '@auth/auth.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@shared/Button';
import { Input } from '@shared/Input';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Insira uma senha válida')
});

export type LoginProps = z.infer<typeof schema>;

const TenantLogin: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const emailId = useId();
  const passwordId = useId();

  const onSubmit = (data: LoginProps) => {
    login(data);
  };

  return (
    <main className='w-screen h-screen flex items-center justify-center md:mt-0 bg-light'>
      <div className='w-[500px] flex flex-col items-center justify-center bg-primary p-3 md:p-0 md:w-[500px] md:h-[600px]'>
        <h1 className='text-4xl font-semibold text-center text-white'>Entrar</h1>
        <form className='w-[80%] h-72 flex flex-col text-light gap-2' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={'email'} className='text-white'>
            E-mail
            <Input id={emailId} {...register('email')} type='email' placeholder='E-mail' />
            <div className='h-6'>
              {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
            </div>
          </label>
          <label htmlFor={'password'} className='text-white'>
            Senha
            <Input id={passwordId} {...register('password')} type='password' placeholder='Senha' />
            <div className='h-6'>
              {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
            </div>
          </label>
          <Button>Entrar</Button>
        </form>
        <div className='flex items-center justify-center flex-col gap-2 mt-4 text-white'>
          <p>
            Ainda não possui uma conta? <Link to='/registrar' className='text-red-500'>Clique aqui!</Link>
          </p>
          <p>
            Esqueceu sua senha? <Link to='/esqueceuSuaSenha' className='text-red-500'>Clique aqui!</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default TenantLogin;