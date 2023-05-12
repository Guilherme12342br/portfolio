import React from 'react';



import {motion} from 'framer-motion';

import {fadeIn} from '../variants';


const services = [

  {
  name: 'C#', 

},
{
  name: 'PHP',
}, 
{
  name: 'React Native / React',
}, 
{
  name: 'Html + Css', 
}, 
]

const Services = () => {
  return(
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}

          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>Tecnologias De meu conhecimento</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Atuo tanto na plataforma Mobile quanto nas plataformas Desktop e WEB.</h3> 
          <button className='btn btn-sn'>Veja meus trabalhos</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex-1'>

            {/* services list */}
            <div>
              {services.map((service, index) => {

                const { name, description, link } = service;
                return ( 
                        <div className='border-b border-white/20 h-[146px] mb-[38px]
                        flex' key={index}>
                          <div className='max-w-[476px]'>
                            <h4 className='text-[20px] tracking-wider font-primary
                            font-semibold mb-6'>{name}
                            </h4>
                            <p className='font-secondary leading-tight'>

                            </p>
                          </div>
                       </div>
                );         
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
