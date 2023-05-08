import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return(
  <section className='section' id='about' ref={ref}>
    <div className=' container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}

        className='flex-1  bg-contain bg-no-repeat h-[640px]
        
        mix-blend-lighten bg-top'></motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>

        <h2 className='h2 text-accent'>
          Sobre mim
        </h2>
        <h3 className='h3 mb-4'>
          Cursando Desenvolvimentos de Sistemas pela ETEC Ermelinda Giannini Teixeira
        </h3>
        <p className='mb-6'>
         À procura de cargo relacionado na área de T.I com ênfase em programação Back-End
        </p>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={2000} end={2021} duration={3} separator=""/> :
                null}
              </div>
              <div className='font-primary text-sn tracking-[2px]'>
                  Inicialização<br />
                  do Curso
              </div>
            </div>
            <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={2000} end={2023} separator="" duration={3} /> :
                null}
              </div>
              <div className='font-primary text-sn tracking-[2px]'>
                  Término<br />
                  do Curso
              </div>
            </div>
            <div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
