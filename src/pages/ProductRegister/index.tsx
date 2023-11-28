import { isAuthenticated } from '@auth/auth.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@shared/Input';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  description: z.string().min(3, 'Descrição muito curto'),
  image: z.string(),
  value: z.string()  
})

export type RegisterProps = z.infer<typeof schema>;

const ProductRegister : React.FC = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      description: '',
      image: '',
      value: ''
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log(`Você selecionou o arquivo: ${selectedFile.name}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      isAuthenticated(token); 
    } else {
      //window.location.href = '/entrar';
    }
  }, [])
  
  const onSubmite = (data: RegisterProps) => {

  }

  return (
  <>
    <main className="w-[87.2vw] h-screen flex items-center justify-center bg-gray-300">
      <div className="p-32 bg-white rounded-md shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-black">
            Cadastre seus produtos
          </h1>
          <hr className="border-t-2 border-black my-3" />
          <form className='px-4 flex flex-col gap-3 bg-white' onSubmit={handleSubmit(onSubmite)}>
            <Input {...register('name')} placeholder='Nome do produto' />
            {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
            <Input {...register('description')} placeholder='Descrição' />
            {errors.description && <span className="text-red-500">{errors.description.message?.toString()}</span>}
            <Input {...register('value')} type='number' placeholder='Valor' />
            {errors.value && <span className="text-red-500">{errors.value.message?.toString()}</span>}
            <div>
              <label
                htmlFor="file-upload"
                className="block text-center cursor-pointer border border-black text-black rounded py-2 px-4 "
              >
                Imagem
              </label>
              <input
                {...register('image')}
                type="file"
                id="file-upload"
                className="sr-only"
                onChange={handleFileChange}
              />
              {errors.image && <span className="text-red-500">{errors.image.message?.toString()}</span>}
            </div>
            <button className='py-2 px-4 text-white bg-blue-500 rounded'>
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ProductRegister;