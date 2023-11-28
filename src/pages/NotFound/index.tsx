import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl text-gray-600">Página não encontrada</p>
          <Link to='/' className='bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Voltar à pagina principal</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;