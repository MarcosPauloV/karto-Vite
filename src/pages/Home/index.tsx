import React, { useEffect, useState } from 'react';

import "react-multi-carousel/lib/styles.css";

import { Link } from 'react-router-dom';


import Buy from '@components/Buy';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home: React.FC = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = window.document.documentElement
    const observer = new ResizeObserver(() => {
      if (element.clientWidth < 768) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    })
    observer.observe(element)
  }, [])

  return (
    <>
      <main className='w-full bg-light pb-20'>
        {visible && (
          <div className='relative w-full'>
            <img src='/home-title-bar.svg' alt="" className='w-full h-auto' />
            <div className='absolute inset-0 flex items-center justify-center text-white'>
              <h1 className='text-center pb-12 text-lg font-bold'>Do seu jeito na palma da sua mão</h1>
            </div>
          </div>
        )}
        <div className='flex items-center justify-center flex-col gap-20'>
          <section className='w-full flex items-center justify-center'>
            <article className='flex flex-col gap-14'>
              <div className='flex gap-16'>
                <div className='h-[406] flex flex-col items-center justify-center'>
                  <p className='text-black text-lg'>Crie Seu Cardápio Digital: A Solução para Pequenos Negócios e</p>
                  <p className='text-black text-lg'>Lanchonetes! Com nosso software intuitivo, você pode facilmente</p>
                  <p className='text-black text-lg'>criar e gerenciar seu cardápio online. Ofereça aos seus clientes a</p>
                  <p className='text-black text-lg'>comodidade de explorar seus pratos e sabores favoritos a</p>
                  <p className='text-black text-lg'>qualquer momento, em qualquer lugar. Potencialize sua presença</p>
                  <p className='text-black text-lg'>online e impulsione seu negócio gastronômico com facilidade.</p>
                  <p className='text-black text-lg'>Monte seu cardápio digital e conquiste mais paladares!</p>
                </div>
                <img src="/home-exemplo-image.svg" alt="" />
              </div>
            </article>
          </section>
          <section className='w-[60%] mt-20'>
            <h1 className='text-black text-2xl font-bold text-center'>Nossos principais sites</h1>
            <Carousel
              draggable={true}
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass=""
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 8000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 300
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 1
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1
                }
              }}
            >
              <Link to='/'>
                <img src="/carosel-bife.svg" alt="" className='w-[300px] h-[300px]' />
              </Link>
              <Link to='/'>
                <img src="/carosel-pizza.svg" alt="" className='w-[300px] h-[300px]' />
              </Link>
              <Link to='/'>
                <img src="/carosel-bife.svg" alt="" className='w-[300px] h-[300px]' />
              </Link>
              <Link to='/'>
                <img src="/carosel-pizza.svg" alt="" className='w-[300px] h-[300px]' />
              </Link>
              <Link to='/'>
                <img src="/carosel-pizza.svg" alt="" className='w-[300px] h-[300px]' />
              </Link>
            </Carousel>
          </section>
          <section className='mt-20 flex items-center justify-center w-[60%] gap-20'>
            <img src="/home-exemplo-item.svg" alt="" />
            <div className='text-black'>
              <h2 className='text-2xl font-bold text-center pb-4'>Principais vantagnes de se criar o cardapio conosco</h2>
              <ul>
                <li>1. Adicionar e Editar Pratos: Com apenas alguns cliques, você pode adicionar novos pratos ao seu cardápio ou editar os existentes. Insira imagens apetitosas, descrições detalhadas e preços atualizados em tempo real.</li>
                <li>2. Organização Simples: Arraste e solte os itens do cardápio para reorganizá-los da maneira que desejar. É perfeito para destacar os pratos especiais ou promover novidades.</li>
                <li>3. Atualizações Instantâneas: Quando você fizer uma alteração no seu cardápio, ela será refletida automaticamente no seu site, garantindo que seus clientes tenham sempre as informações mais recentes.</li>
                <li>4. Gestão de Disponibilidade: Controle a disponibilidade de pratos por horário ou dia da semana. Desative temporariamente itens quando estiverem fora de estoque.</li>
                <li>5. Design Personalizado: Personalize a aparência do seu cardápio de acordo com a identidade visual da sua empresa. Escolha cores, fontes e layouts para criar um cardápio digital exclusivo.</li>
                <li>6. Suporte Técnico: Nossa equipe de suporte está sempre pronta para ajudar em caso de dúvidas ou problemas. Estamos aqui para garantir que você tenha uma experiência tranquila.</li>
              </ul>
            </div>
          </section>
          <section>
            <Buy image='/carosel-bife.svg' />
          </section>
        </div>
      </main>
      <footer className='w-full h-32 bg-primary'></footer>
    </>
  );
};

export default Home;