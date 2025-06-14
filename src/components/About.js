import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import{fadeIn} from '../variants';
import { Link } from 'react-scroll';


const About = () => {
  const [ref, InView] = useInView ({
    threshold:0.5,
  });

  return (
    <section  className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-10 h-screen'>
          {/*img*/}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{onec:false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top'></motion.div>
          {/*text*/}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{onec:false, amount: 0.3}} 
          className='flex-1 mb-4'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 '>I am a second-year IT student in the NDT program.
            </h3>
            <p className='indent-8 text-justify'>
              I'm Supun Hashintha, a student at the University of Moratuwa with a passion for software development,
              AI, and web technologies. I specialize in project management, UI design, and full-stack development using React.js and Next.js, focusing on clean code, collaboration, and continuous learning.
            </p>
            
            {/*status*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-6 mt-4'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ? 
                    <CountUp start={0} end={2} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'> 
                  Years of <br/> 
                Experience 
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ? 
                    <CountUp start={0} end={15} duration={3}/> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'> 
                  Projects <br/> 
                Completed 
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    InView ? 
                    <CountUp start={0} end={30} duration={3}/> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'> 
                  Satisfied<br/> 
                Projects 
                </div>
              </div>
            </div>

            
            <div className='flex gap-x-8 items-center'>
            <Link
              activeClass='active'
              smooth={true}
              spy={true}
              to='contact' 
              className='btn btn-lg flex items-center'> Contact me
             </Link>


            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
