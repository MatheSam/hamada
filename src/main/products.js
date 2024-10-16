import React, { useState } from 'react';
import { PADDING, WPP_LINK } from '../constants';
import { VscError } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import Li from '../components/li';
import Button from '../components/button';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const produtos = [
    {
      categoria: 'Site profissional',
      tempo: '10 dias úteis',
      de: '1.699,00',
      qtde: '2x de',
      por: '559,50',
      estatico: <VscError className='text-red-500'/>,
      blog: <VscError className='text-red-500'/>,
      texto: 'Quero preço baixo'
    },
    {
      categoria: 'Mostruário virtual sem blog',
      tempo: '30 dias úteis',
      de: '4.490,00',
      qtde: '3x de',
      por: '1.130,30',
      estatico: <FaCheck />, // pode adicionar e remover itens, criar categorias;
      blog: <VscError className='text-red-500'/>, // pode adicionar e remover noticias;
      texto: 'Falar com especialista'
    },
    {
      categoria: 'Mostruário virtual com blog',
      tempo: '35 dias úteis',
      de: '4.990,00',
      qtde: '3x de',
      por: '1.333,30',
      estatico: <FaCheck />, // pode adicionar e remover itens, criar categorias;
      blog: <FaCheck />, // pode adicionar e remover noticias;
      texto: 'Quero um site completo'
    },
  ];

  return (
    <section className='bg-qua font-roboto py-[20px]'>
      <article className={`${PADDING} flex flex-col text-center gap-[20px] relative overflow-hidden md:flex-row`}>
        <p className='text-pri text-2xl font-bold'>PRODUTOS DISPONÍVEIS</p>
        {produtos.map((prod, index) => {
          const { categoria, tempo, de, qtde, por, estatico, blog, texto } = prod;
          return (
            <div style={{
              animationDuration: 300,
              boxShadow: hoveredIndex === index ? '1px 5px 30px 4px rgba(0,0,0,0.94)' : 'none',
              transition: 'box-shadow 0.5s ease',
            }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index} className={`flex flex-col bg-[#f0f7fa] rounded py-[20px] transition-transform duration-1000 ease-in-out transform hover:scale-105 ${index == 2 && 'mb-[50px]'} gap-[20px]`}>
              <p className='text-con font-bold text-xl'>{categoria}</p>
              <ul className='flex flex-col'>
                <Li icon={<FaCheck />} text={`Entrega em ${tempo}`} />
                <Li icon={<FaCheck />} text={'Teste'} />
                <Li icon={<FaCheck />} text={'Site responsivo'} />
                <Li icon={<FaCheck />} text={'Suporte ilimitado via WhatsApp, e_mail e Telefone'} />
                <Li icon={<FaCheck />} text={'Feito com tecnológias de confiança pelo mercado'} />
                <Li icon={<FaCheck />} text={'Alta performance'} />
                <Li icon={estatico} text={'Pode adicoinar e remover itens, além de criar categorias'} />
                <Li icon={blog} text={'Pode adicionar e remover nóticias, artigos e outros textos'} />
              </ul>
              <div className='text-lg font-semibold mt-[10px]'>
                <p className='line-through font-semibold text-con'>de R$ {de}</p>
                <p className='text-tex'>por {qtde}</p>
                <p className='text-3xl text-tit font-bold'>R$ {por}</p>
              </div>
              <Button texto={texto.toUpperCase()} href={`${WPP_LINK}?text=Olá, possuo interesse no ${categoria}`} />
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Products;