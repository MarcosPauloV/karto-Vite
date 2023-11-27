import Hamburger from 'hamburger-react';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false)

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
                <Link to="/" className="flex gap-2 p-2">
                  <img alt="Shop" src="/shop-icon.svg" width={24} height={24} />
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/registrar" className="flex gap-2 p-2">
                  <img alt="Entrar" src="/profile-icon.svg" width={24} height={24} />
                  Entrar
                </Link>
              </li>
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
            <Link to="/" className="flex gap-2 p-2">
              <img alt="Shop" src="/shop-icon.svg" width={24} height={24} />
              Preços
            </Link>
          </li>
          <li>
            <Link to="/registrar" className="flex gap-2 p-2">
              <img alt="Entrar" src="/profile-icon.svg" width={24} height={24} />
              Entrar
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
