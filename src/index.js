import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './header/header';
import Capa from './main/capa';
import Vantagens from './main/vantagens';
import Products from './main/products';
import FloatingButton from './components/floating';
import Beneficios from './main/beneficios';
import FormEmail from './components/formEmail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='flex flex flex-col gap-[20px]'>
      <Header className='w-full !p-[0px]' />
      <Capa />
      <Vantagens />
      <Products />
      <FloatingButton />
      <Beneficios />
      <FormEmail />
    </section>
  </React.StrictMode>
);
