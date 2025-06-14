import React from 'react';
//images
import Image from '../assets/profile-3.jpg';
//pdf
import pdfFile from '../assets/pdfFile.pdf';
//icons
import {FaGithub, FaFacebook, FaTwitter} from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variats
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return( 
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center gap-y-5 lg:gap-x-12'>
          {/*text*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}} 
            className='text-[45px] font-bold leading-[0.8] lg:text-[90px]'
            >
              SUPUN <span> HASHINTHA</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}} 
            className='mb-6 text-[34px] lg:text-[58px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4 lg:text-[45px]'>I am a </span>
              <TypeAnimation sequence={[
                'Developer',2000,
                'Designer',2000,
                'Creative Technologist',2000,
                ]}
                speed={50}
                className='text-accent lg:text-[45px]'
                wrapper='span'
                repeat={Infinity}
                />

            </motion.div>
            <motion.p
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}  
            className='mb-6 text-justify max-w-lg mx-auto lg:mx-0'> 
            I turn ideas into impactful solutions through code — driven by passion, continuous learning, collaboration, and a desire to innovate, solve real-world problems, and grow through every challenge
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}  
            className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'>
              <Link
              activeClass='active'
              smooth={true}
              spy={true}
              to='contact' 
              className='btn btn-lg flex items-center'>
                Contact me
              </Link>
              <a href={pdfFile} download="pdfFile.pdf" className='text-gradient btn-link'>Download Resume</a>
            </motion.div>
            {/*social*/}
              <motion.div
                variants={fadeIn('up', 0.8)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once:false, amount:0.9}}  
                className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                  <a href="https://www.facebook.com/share/1LxGD9WZCk/">
                    <FaFacebook/>
                  </a>
                  <a href="https://github.com/tlashla373">
                    <FaGithub/>
                  </a>
                  <a href="#">
                    <FaTwitter/>
                  </a>
              </motion.div>
          </div>

          {/*image*/}
          <motion.div
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.7}}  
          className='hidden lg:flex flex-1 max-w-[225px] lg:max-w-[382px] '>
            <img className='rounded-lg' src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
