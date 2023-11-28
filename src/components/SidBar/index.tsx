import DashLink from '@components/dashboardLinks';
import React from 'react';
import { Link } from 'react-router-dom';

const SidBar: React.FC = () => {

  return (
    <>
      <aside className="w-60 bg-[#071E22] flex flex-col items-center pt-10">
        <Link to="/">
          <img alt="logo" src='/logo-icon.svg' width={58.75} height={39.11} />
        </Link>
        <div className='h-[90%] flex justify-between flex-col'>
          <ul className='flex flex-col gap-6 mt-20'>
            <li>
              <Link to="/" className="flex gap-2">
                <img alt="Início" src="/home-icon.svg" width={20} height={20} />
                Início
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-2">
                <img alt="Shop" src="/shop-icon.svg" width={20} height={20} />
                Preços
              </Link>
            </li>
            <DashLink alt='' to='/tenant' src='/empress-icon.svg'>
              Dados da empresa
            </DashLink>
            <DashLink alt='' to='/tenant/registro-produto' src='/products-icons.svg'>
              Cadastro de produtos
            </DashLink>
            <DashLink alt='' to='/tenant/listar-produtos' src='/box-time.svg'>
              Produtos
            </DashLink>
          </ul>
          <div className='flex flex-col gap-4'>
            <hr />
            <button className='p-2 bg-red-500 rounded-sm'>
              Sair
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidBar;