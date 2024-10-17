import React from 'react';
import Typewriter from 'typewriter-effect';
import img_capa from '../imagens/imgs/sentado.jpg';
import { PADDING } from '../constants';

const Capa = () => {
  return (
    <section className={`${PADDING}`}>
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
      <hr></hr>
    </section>
  )
}

export default Capa;