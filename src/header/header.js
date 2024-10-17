import React, { useState, useEffect } from 'react';
import logo from './../imagens/logo/logo2.png';
import { PADDING } from '../constants';

// menu
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Hamburger from 'hamburger-react'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false)
  const [tipoMenu, setTipoMenu] = useState(1);
  const [fixedHeader, setFixedHeader] = useState(false);

  const options = [
    { descr: 'Por que ter um site?', href: '#porque' },
    { descr: 'Produtos', href: '#produtos' },
    { descr: 'Por que a Hamada?', href: '#vantagens' },
    { descr: 'Contato', href: '#contato' },
  ];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToAnchor = (href) => {
    if (href === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleMenuItemClick = (event, href) => {
    scrollToAnchor(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  useEffect(() => {
    const changeMenu = () => {
      if (window.innerWidth >= 800) {
        setTipoMenu(1);
      } else {
        setTipoMenu(2);
      }
    }

    changeMenu();
    window.addEventListener('resize', changeMenu)

    return () => {
      window.removeEventListener('resize', changeMenu);
    }
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    if (open == false) {
      setMenu(false);
    }
  }, [open])

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {options.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <a onClick={(e) => handleMenuItemClick(e, text.href)}>
                <ListItemText primary={text.descr} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className={`h-[80px] ${fixedHeader ? 'block' : 'hidden'}`} />
      <header className={`${fixedHeader && 'fixed top-0 left-0 w-full z-50 bg-white'} shadow-[0px_8px_12px_-2px_rgba(0,0,0,${fixedHeader ? '0.1' : '0.05'})] py-[5px] transition-all duration-500 ease-in-out`}>
        <div className={`${PADDING} pt-[10px] flex items-center justify-between gap-[20px]`}>
          <img src={logo} onClick={(e) => handleMenuItemClick(e, '')} alt="Descrição da imagem" className='h-[80px] hover:cursor-pointer' />
          <>
            {tipoMenu == 2 ?
              <div>
                <Button onClick={toggleDrawer(true)}>
                  <Hamburger toggled={menu} toggle={setMenu} />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </div>
              :
              <div className='flex gap-[20px] lg:gap-[50px] text-center aligm-center'>
                {options.map((item, index) => {
                  return (
                    <a className='text-sm self-center text-tit font-semibold' key={index} onClick={(e) => handleMenuItemClick(e, item.href)}>
                      <p className='relative inline-block after:block after:w-0 after:h-[2px] after:bg-con after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer'>
                        {item.descr.toUpperCase()}
                      </p>
                    </a>
                  )
                })}
              </div>
            }
          </>
        </div>
      </header>
    </>
  )
}

export default Header;