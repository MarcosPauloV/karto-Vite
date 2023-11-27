import PublicLayout from '@components/PublicLayout';
import ForgotPassword from '@pages/ForgotPassword';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='/entrar' element={<Login />} />
            <Route path='/registrar' element={<Register />} />
            <Route path='/esqueceuSuaSenha' element={<ForgotPassword />} />
            
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;