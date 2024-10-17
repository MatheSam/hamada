import React from 'react';
import Typewriter from 'typewriter-effect';
import img_capa from '../imagens/imgs/sentado.jpg';
import { PADDING, WPP_LINK } from '../constants';
import Button from '../components/button';

const Capa = () => {
  return (
    <section className={`${PADDING} flex flex-col`}>
      <h1 className='text-3xl font-bold my-[20px] text-tit text-center'>TORNAMOS SUA EMPRESA EM UMA <span className='bg-con text-pri px-[6px]'>EMPRESA DIGITAL!</span></h1>
      <div className='flex flex-col text-center gap-[30px] font-roboto mb-[50px] sm:flex-row sm:items-center sm:gap-[0px]'>
        <div className='h-[100px]'>
          <div className='text-left'>
            <p className='text-tex lg:text-2xl'>Transforme sua presença digital e torne-se visível para o mundo com um site que —
              <span className='text-con font-bold text-center'>
                <Typewriter
                  options={{
                    strings: ['sua empresa merece!', 'reflete a essência do seu negócio!', 'é rápido, responsivo e feito sob medida para você!'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 10,
                    pauseFor: 2000,
                  }}
                />
              </span>
            </p>
          </div>
        </div>
        <img className='w-[80%] sm:w-[40%] self-center' src={img_capa} />
      </div>
      <button className='bg-con text-pri hover:bg-pri hover:text-con rounded px-[10px] py-[5px] transition-all duration-500 ease-in-out w-fit self-center lg:self-end mb-[10px] animate-pulseColor'>
        <a href={`${WPP_LINK}?&text=Olá, gostaria de um orçamento!`} target='_blank'>QUERO UM ORÇAMENTO</a>
      </button>

      <hr></hr>
    </section>
  )
}

export default Capa;