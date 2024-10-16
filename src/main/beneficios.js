import React from 'react';
import { MdSchool, MdSupportAgent, MdTrendingUp } from "react-icons/md";
import { PADDING } from '../constants';

const Beneficios = () => {
  const style_icon = 'text-3xl text-qua'

  const beneficios = [
    {
      icon: <MdSchool className={`${style_icon}`}/>,
      titulo: 'Treinamento completo sobre a plataforma',
      texto: 'Treinamento online ou presencial realizado junto a um especialista.'
    },
    {
      icon: <MdSupportAgent className={`${style_icon}`}/>,
      titulo: 'Suporte ilimitado',
      texto: 'Suporte ilimitado durante o horário comercial, segunda à sexta das 08h30 às 18h30. Sempre haverá um especialista para te ajudar!'
    },
    {
      icon: <MdTrendingUp className={`${style_icon}`}/>,
      titulo: 'Mantenha-se no topo das pesquisas do Google',
      texto: 'Seu site será otimizado para SEO e assim possa alcançar os primeiros lugares nos resultados do Google.'
    },
  ]
  return (
    <section className={`${PADDING} flex flex-col gap-[30px]`}>
      <h1 className='self-center text-con font-semibold text-3xl text-center'><b>Vantagens</b> de <b>fazer seu site</b> ou mostruário virtual com a <b>Hamada</b></h1>
      <div className='flex flex-col gap-[20px]'>
        {
          beneficios.map((item, index) => {
            return (
              <div key={index} className='flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[5px]'>
                  <p className=''>{item.icon}</p>
                  <h3 className='font-semibold text-tit'>{item.titulo}</h3>
                </div>
                <p className='text-tex'>{item.texto}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
};

export default Beneficios; 