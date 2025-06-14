import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants';


//services data

const services = [
  {
    name:'Java Script',
    description: 'JavaScript makes websites interactive, enabling buttons, animations, forms, and other dynamic page behavior.',
    link:'Lern more',
  },
  {
    name:'React',
    description: 'React builds efficient, reusable user interface components using a virtual DOM and declarative code.',
    link:'Lern more',
  },
  {
    name:'Figma',
    description: 'Figma helps design user interfaces collaboratively, allowing real-time editing and sharing with teams.',
    link:'Lern more',
  },
  {
    name:'Node.js',
    description: 'Node.js executes JavaScript on servers, creating scalable, fast backends for modern web applications.',
    link:'Lern more',
  },
]
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/*text & image*/} {/*lg:bg-services*/} 
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{onec:false, amount: 0.3}} 
          
          className='flex-1 {/*lg:bg-services*/}  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              Skills & Expertise
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Merging tech skills and security practices to build robust, scalable solutions.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/*services*/}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{onec:false, amount: 0.3}}
          className='flex-1'>
            {/*servise tittle*/}
            {services.map((service, index) => {
              //destructure service
              const {name,description,link} = service;

              return (
              <div 
              className='border-b border-white/20 h-[146px] mb-[38px] flex' 
              key={index}
              > 
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a 
                  href="#" 
                  className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <BsArrowUpRight/>
                  </a>
                  <a href="#" className='text-gradient text-sm'>
                    {link}
                  </a>
                </div>
              </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>

  );
  
};

export default Services;
