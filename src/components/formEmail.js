import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PADDING } from '../constants';

const FormEmail = () => {
  const form = useRef();
  const style_input = 'rounded border-0 outline-none px-[5px] border border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-200';

  const notify = () => {
    toast.success('E-mail enviado com sucesso!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_id', 'templade_id', form.current, {
        publicKey: 'publick_key',
      })
      .then(
        () => {
          notify();
          e.target.reset();
        },
        (error) => {
          alert(error.text)
        },
      );
  };

  return (
    <section className='bg-qua py-[20px]'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form ref={form} id='contact-form' onSubmit={sendEmail} className={`${PADDING} w-full flex justify-center`}>
        <div className='flex flex-col items-center gap-[10px] w-max'>
          <h2 className='text-pri font-bold text-xl text-center'>ENTRE EM CONTATO VIA E-MAIL</h2>
          <input placeholder='Nome' required type='text' name="name" className={`${style_input}`} />
          <input placeholder='E-mail' required type='email' name="email" className={`${style_input}`} />
          <input placeholder='Celular' required name="cel" className={`${style_input}`} />
          <label className='text-pri font-semibold'>Mensagem</label>
          <textarea required type='text' rows='5' cols='40' className={`${style_input}`} name="message" />
          <div className='self-end'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' value='send' variant="contained"
                sx={{ backgroundColor: '#64cf55', color: '#1f7013', '&:hover': { backgroundColor: '#1f7013', color: '#64cf55' } }}
              >
                Enviar
              </Button>
            </Stack>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default FormEmail;