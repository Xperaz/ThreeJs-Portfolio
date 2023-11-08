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
    <div className='center-model w-full mt-10'>
      <div
        className='flex flex-col justify-between items-start m-auto mx-64 z-50'>
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

            className={`font-BlackStone text-[45px] font-normal`} onMouseEnter={textEnter} onMouseLeave={textLeave} >Hi There !</motion.h2>
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
            className='text-[16px] font-light' onMouseEnter={textEnter} onMouseLeave={textLeave} >I am Azedine Ouhadou, a Software Engineer focuses on Front-End. My code is where creativity meets precision. Explore my skills, projects, and journey in About Me. If we align, let&apos;s craft digital masterpieces together at Hire Me.</motion.p>
      </div>
    </div>
  )
}

export default Introduction