import DashLink from '@components/dashboardLinks';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
  return (
    <>
      <aside className="w-60 bg-[#071E22] flex flex-col items-center pt-10">
        <Link href="/">
          <Image alt="logo" src='/logo-icon.svg' width={58.75} height={39.11} priority={true}/>
        </Link>
        <div className='h-[90%] flex justify-between flex-col'>
          <ul className='flex flex-col gap-6 mt-20'>
            <li>
              <Link href="/" className="flex gap-2">
                <Image alt="Início" src="/home-icon.svg" width={20} height={20} />
								Início
              </Link>
            </li>
            <li>
              <Link href="/" className="flex gap-2">
                <Image alt="Shop" src="/shop-icon.svg" width={20} height={20}/>
								Preços
              </Link>
            </li>
            <li>
              <Link href="/register" className="flex gap-2">
                <Image alt="Entrar" src="/profile-icon.svg" width={20} height={20}/>
								Entrar
              </Link>
            </li>
            <DashLink alt='' href='/dashboard' src='/building.svg'>
                Dados da empresa
            </DashLink>
            <DashLink alt='' href='/dashboard/productregister' src='/box.svg'>
                Cadastro de produtos
            </DashLink>
            <DashLink alt='' href='/dashboard/products' src='/box.svg'>
                Produtos
            </DashLink>
            <DashLink alt='' href='/dashboard/request' src='/box-time.svg'>
                Meus Pedidos
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

export default SideBar;