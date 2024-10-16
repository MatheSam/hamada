import React, { useState, useEffect } from 'react';
import logo1 from './../imagens/logo/logo.png';
import logo2 from './../imagens/logo/logo2.png';
import Menu from './menu';
import { PADDING } from '../constants';

const Header = () => {
  const [logo, setLogo] = useState(logo2)

  useEffect(() => {
    const updateLogo = () => {

      if (window.innerWidth >= 650) {
        setLogo(logo2);
      } else {
        setLogo(logo2);
      }
    }

    updateLogo();

    window.addEventListener('resize', updateLogo)

    return () => {
      window.removeEventListener('resize', updateLogo);
    }
  })

  return (
    <header className='shadow-[0px_8px_12px_-2px_rgba(0,0,0,0.75)] py-[5px]'>
      <div className={`${PADDING} pt-[10px] flex items-center justify-between`}>
        <img src={logo} alt="Descrição da imagem" className='h-[80px]' />
        <Menu />
      </div>
    </header>
  )
}

export default Header;