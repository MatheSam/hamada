import React from 'react';
import Confianca from '../imagens/imgs/confianca.png';
import Facilidade from '../imagens/imgs/easy.jpg';
import Disponibilidade from '../imagens/imgs/working.jpg';
import Competitividade from '../imagens/imgs/concorrencia.png';
import { PADDING } from '../constants';

const Vantagens = () => {
  const vantagens = [
    {
      img: Confianca,
      'titulo': 'Credibilidade e Confiança',
      'texto': 'Um site bem feito transmite profissionalismo e aumenta a confiança dos clientes no seu negócio. A primeira impressão faz toda a diferença.'
    },
    {
      img: Facilidade,
      'titulo': 'Facilidade para Clientes',
      'texto': 'Um site oferece informações rápidas e práticas para os seus clientes, tornando mais fácil agendar serviços, conhecer seus produtos ou tirar dúvidas.'
       
    },
    {
      img: Disponibilidade,
      'titulo': 'Disponibilidade 24/7',
      'texto': 'Seu site trabalha para você o tempo todo, apresentando seus produtos e serviços mesmo fora do horário comercial. Nunca perca uma oportunidade de negócio.'
    },
    {
      img: Competitividade,
      'titulo': 'Competitividade',
      'texto': 'Se seus concorrentes têm um site e você não, já está perdendo oportunidades. Invista em um site para se manter à frente.'
    }
  ]
  return (
    <section id='porque' className={`${PADDING} flex flex-col font-roboto gap-[20px]`}>
      <h1 className='text-2xl font-semibold text-tex text-center'>Por que seu negócio precisa de um site próprio?</h1>
      <div className='flex flex-col gap-[40px] sm:grid sm:grid-cols-2'>
        {vantagens.map((item, index) => {
          return (
            <div className='flex flex-col gap-[10px] text-center items-center' key={index}>
              <img className='h-[200px]' src={item.img} alt={item.titulo}/>
              <h2 className='text-xl font-semibold text-tit'>{item.titulo}</h2>
              <p className='text-tex'>{item.texto}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Vantagens;