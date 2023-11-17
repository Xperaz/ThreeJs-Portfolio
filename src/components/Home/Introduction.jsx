import CursorContext from '@/context/CursorContext';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  const {setCursorVariant} = useContext(CursorContext);

  const textEnter = () => {
    setCursorVariant("text");
  }
  
  const textLeave = () => {
    setCursorVariant("default");
  }

  return (
    <div className='w-full absolute introduction'>
      <div
        className='flex flex-col justify-between items-start m-auto lg:mx-64 z-50 mx-10'>
          <motion.h2
            initial={{
              z: -500,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              z: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 1
            }}

            className={`font-allison text-[45px] font-normal`} onMouseEnter={textEnter} onMouseLeave={textLeave} >Hi There !</motion.h2>
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
            className='text-[16px] sm:text-[18px] font-light leading-7' onMouseEnter={textEnter} onMouseLeave={textLeave} >I am Azedine Ouhadou, a Software Engineer focused on Front-End. I enjoy building stunning and user-friendly website building . Explore my skills, projects, and journey in About Me. If you're interested in working with me, please feel free to get in touch with me.</motion.p>
      </div>
    </div>
  )
}

export default Introduction