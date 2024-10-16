import React from 'react';
import Typewriter from 'typewriter-effect';
import img_capa from '../imagens/imgs/sentado.jpg';
import { PADDING } from '../constants';

const Capa = () => {
  return (
    <section className={`${PADDING} flex flex-col text-center gap-[30px] font-roboto mb-[30px]`}>
      <div className='h-[150px]'>
        <h1 className='text-3xl font-bold my-[20px] text-tit'>Tenha seu próprio site!</h1>
        <div className='text-left'>
          <p className='text-tex'>Transforme sua presença digital e torne-se visível para o mundo com um site que —
            <span className='text-con font-bold'>
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
      <img className='' src={img_capa}/>
      <hr></hr>
    </section>
  )
}

export default Capa;