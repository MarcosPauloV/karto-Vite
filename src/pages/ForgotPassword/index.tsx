import { forgotPassword } from '@auth/auth.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@shared/Button';
import { Input } from '@shared/Input';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  password: z.string().min(8, 'Insira uma senha válida'),
  confirmPassword: z.string().min(8, 'Insira uma senha válida')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'A senha não é igual a sua confirmação',
  path: ['confirmPassword']
});

export type ForgotPasswordProps = z.infer<typeof schema>;

const ForgotPassword: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const passwordId = useId();
  const confirmPasswordId = useId();

  const onSubmit = (data: ForgotPasswordProps) => {
    forgotPassword(data);
  };

  return (
    <>
      <main className='w-screen h-[91.4vh] bg-white flex items-center justify-center'>
        <div className='w-[500px] h-[600px] bg-[#071E22] flex items-center justify-center flex-col gap-4 rounded-lg '>
          <h1 className='text-4xl font-semibold text-center text-white'>Entrar</h1>
          <form
            className='w-[225px] flex flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor={'password'} className='text-white'>
              Senha
              <Input id={passwordId} {...register('password')} type='password' placeholder='Senha' />
              {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
            </label>
            <label htmlFor={'confirmPassword'} className='text-white'>
              Senha
              <Input id={confirmPasswordId} {...register('confirmPassword')} type='password' placeholder='Confirme sua senha' />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message?.toString()}</span>}
            </label>
            <Button>Entrar</Button>
          </form>
          <div className='flex items-center justify-center flex-col gap-2 mt-4'>
            <p>
              Ainda não possui uma conta? <Link to='/entrar' className='text-red-500'>Clique aqui!</Link>
            </p>
            <p>
              Esqueceu sua senha? <Link to='/esqueceuSuaSenha' className='text-red-500'>Clique aqui!</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;