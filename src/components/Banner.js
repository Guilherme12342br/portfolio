import React from 'react';

import Image from '../assets/avatar.png';

import {FaGithub, FaLinkedin} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const Banner = () => {
  return(
  <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
  <div className="container mx-auto">
    <div className='flex felx-col gap-y-8 lg:flex-row lg-items-center lg:gap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}

        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          GUILHERME <span>LIMA</span>
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Eu sou</span>
            <TypeAnimation 
            sequence={[
              "Programador",
              2000,
              "Músico",
              2000,
            ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='nb-8 max-w-lg nx-auto lg:nx-0'>
            Bem-vindo ao meu Portfólio. <br/>
            Focado sempre em aprender e explorar novas tecnologias.
          </motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 nx-auto lg:nx-0'>
          </motion.div>
          <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          clasName="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">

            <a href="https://github.com/Guilherme12342br">
              <FaGithub/>
              </a>
              
              <br/>

            <a href="https://www.linkedin.com/in/guilherme-lima-seredko-916321237/">
              <FaLinkedin/>
              </a>

          </motion.div>
        </div>
      <motion.div
      variants={fadeIn('left', 0.8)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
        <img src={Image} alt=''/></motion.div>
    </div>
  </div>
  </section>
  );
};

export default Banner;
