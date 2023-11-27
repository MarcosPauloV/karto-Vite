import { register as registerController } from '@auth/auth.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@shared/Button';
import { Input } from '@shared/Input';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  email: z.string().email('Insira um email válido'),
  password: z.string().min(8, 'Senha muito curta'),
  confirmPassword: z.string().min(8, 'Senha muito curta')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'A senha não é igual a sua confirmação',
  path: ['confirmPassword'], // path of error
});

export type RegisterProps = z.infer<typeof schema>;

const Register: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const onSubmit = (data: RegisterProps) => {
    registerController(data);
  };

return (
  <main className='w-screen min-h-screen bg-[#F5F5F5] flex items-center justify-center'>
    <section className="w-full max-w-md bg-[#071E22] flex flex-col items-center rounded-lg p-8">
      <h1 className='text-4xl font-semibold text-center text-white mb-4'>Cadastro</h1>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={nameId} className='text-white mb-2'>
          Nome
          <Input id={nameId} {...register('name')} type='text' name='name' placeholder='Nome' />
          {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
        </label>
        <label htmlFor={emailId} className='text-white mb-2'>
          Email
          <Input id={emailId} {...register('email')} type="email" name='email' placeholder="Email" />
          {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
        </label>
        <label htmlFor={passwordId} className='text-white mb-2'>
          Senha
          <Input id={passwordId} {...register('password')} type="password" name='password' placeholder="Senha" />
          {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
        </label>
        <label htmlFor={confirmPasswordId} className='text-white mb-2'>
          Confirme sua senha
          <Input id={confirmPasswordId} {...register('confirmPassword')} type="password" name='confirmPassword' placeholder="Confirme sua senha" />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message?.toString()}</span>}
        </label>
        <div className='mt-4 w-full flex items-center justify-center'>
          <Button>Cadastrar</Button>
        </div>
      </form>
      <div className='text-white mt-4 text-center'>
        <p>Já possui uma conta? <Link to='/entrar' className='text-red-500'>Clique aqui!</Link></p>
        <p>Esqueceu sua senha? <Link to='/esqueceuSuaSenha' className='text-red-500'>Clique aqui!</Link></p>
      </div>
    </section>
  </main>
);
};

export default Register;