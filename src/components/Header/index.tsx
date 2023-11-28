import Hamburger from 'hamburger-react';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [tenant, setTenant] = useState(true);

  useEffect(() => {
    const element = window.document.documentElement
    const observer = new ResizeObserver(() => {
      if (element.clientWidth < 768) {
        setVisible(false)
      } else {
        setVisible(true)
        setOpen(false)
      }
    })
    observer.observe(element)
  }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (token === null) {
  //     setTenant(false)
  //   } else {
  //     setTenant(true)
  //   }
  // }, [])

  return (
    <>
      <header className="bg-[#071E22] h-20 flex items-center justify-center">
        <nav className="w-screen flex items-center justify-around gap-2 text-white">
          <Link to="/">
            <img alt="logo" src='/logo-icon.svg' width={58.75} height={39.11} />
          </Link>
          {visible ? (
            <ul className="flex gap-2">
              <li>
                <Link to="/" className="flex gap-2 p-2">
                  <img alt="Início" src="/home-icon.svg" width={24} height={24} />
                  Início
                </Link>
              </li>
              <li>
                <a href='#plains' className="flex gap-2 p-2">
                  <img alt="Shop" src="/shop-icon.svg" width={24} height={24} />
                  Preços
                </a>
              </li>
              <li>
                <Link to="/entrar" className="flex gap-2 p-2">
                  <img alt="Entrar" src="/profile-icon.svg" width={24} height={24} />
                  Entrar
                </Link>
              </li>
              {tenant && (
                <li>
                  <Link to="/tenant" className="flex gap-2 p-2">
                    <img alt="Empresa" src="/profile-icon.svg" width={24} height={24} />
                    Seu negocio
                  </Link>
                </li>
              )}
            </ul>
          ) : (
            <>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </>
          )}
        </nav>
      </header>
      {isOpen && (
        <ul className="flex flex-col gap-2 pb">
          <li>
            <Link to="/" className="flex gap-2 p-2">
              <img alt="Início" src="/home-icon.svg" width={24} height={24} />
              Início
            </Link>
          </li>
          <li>
            <a href='#plains' className="flex gap-2 p-2">
              <img alt="Shop" src="/shop-icon.svg" width={24} height={24} />
              Preços
            </a>
          </li>
          <li>
            <Link to="/entrar" className="flex gap-2 p-2">
              <img alt="Entrar" src="/profile-icon.svg" width={24} height={24} />
              Entrar
            </Link>
          </li>
          {tenant && (
            <li>
              <Link to="/tenant" className="flex gap-2 p-2">
                <img alt="Empresa" src="/profile-icon.svg" width={24} height={24} />
                Seu negocio
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Header;
