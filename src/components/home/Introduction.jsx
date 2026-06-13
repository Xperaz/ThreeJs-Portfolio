import CursorContext from '@/context/CursorContext';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/shared/AnimatedTitle';

const Introduction = () => {
  const {setCursorVariant} = useContext(CursorContext);

  const textEnter = () => {
    setCursorVariant("text");
  }
  
  const textLeave = () => {
    setCursorVariant("default");
  }

  return (
    <div className='w-full absolute introduction max-w-[1200px] xl:max-w-[1400px]'>
      <div
        className='flex flex-col justify-between items-start m-auto lg:mx-64 z-50 mx-8'>
          <AnimatedTitle
            className={`font-allison text-[45px] font-normal`} onMouseEnter={textEnter} onMouseLeave={textLeave} >Hi There !</AnimatedTitle>
          <motion.p
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }} 
            className='text-[14px] sm:text-[18px] font-light sm:leading-7 leading-6' onMouseEnter={textEnter} onMouseLeave={textLeave} >
              I am Azedine Ouhadou, a Software Engineer focused on Front-End. I enjoy building stunning and user-friendly website building . Explore my skills, projects, and journey in About Me. If you&apos;re interested in working with me, please feel free to get in touch with me.
          </motion.p>
      </div>
    </div>
  )
}

export default Introduction