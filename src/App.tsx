import PublicLayout from '@components/PublicLayout';
import TenantLayout from '@components/TenantLayout';
import Dynamic from '@pages/Dynamic';
import ForgotPassword from '@pages/ForgotPassword';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import ProductList from '@pages/ProductList';
import ProductRegister from '@pages/ProductRegister';
import Register from '@pages/Register';
import Dashboard from '@pages/Tenant';
import TenantLogin from '@pages/TenantLogin';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='/entrar' element={<TenantLogin />} />
            <Route path='/registrar' element={<Register />} />
            <Route path='/esqueceuSuaSenha' element={<ForgotPassword />} />
          </Route>
          <Route>
            <Route path='/cardapio/login' element={<Login />} />
            <Route path='/cardapio/:slugId' element={<Dynamic />} />
          </Route>
          <Route path='/tenant' element={<TenantLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/tenant/registro-produto' element={<ProductRegister />} />
            <Route path='/tenant/listar-produtos' element={<ProductList />} />
          </Route>
          {/* Rota para página 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;