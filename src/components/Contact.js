import React from 'react';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
const Contact = () => {
  return(
   <section id="contact" className="py-16 lg:section">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
         <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}

         className='flex-1'>
          <div>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Vamos Trabalhar<br/>
            Juntos!</h2>
          </div>
         </motion.div>
         <motion.form
         variants={fadeIn('left', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.4}}

         className='flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start'>


            <a href="https://github.com/Guilherme12342br">
              <h1
               className=" items-center btn btn-lg flex">GitHub<FaGithub /></h1>
            </a>

            <a href="https://www.linkedin.com/in/guilherme-lima-seredko-916321237/" >
              <h1 
              className=" items-center btn btn-lg flex">Linkedin<FaLinkedin /></h1>
            </a>

         </motion.form>
      </div>
    </div>
    </section>
  );
};

export default Contact;
