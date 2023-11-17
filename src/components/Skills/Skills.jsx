"use client";
import Header from '../Header';
import { useState } from 'react';
import CursorContext from '@/context/CursorContext';
import Cursor from '../shared/Cursor';
import TechSkills from './TechSkills';
import { motion } from 'framer-motion';

const Skills = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };
  
    return (
        <div className='z-50' >
          <CursorContext.Provider value={cursorInfo}>
            <Header />
            <div className='xl:flex xl:justify-center xl:items-center xl:w-full xl:h-[90vh]'>
              <Cursor cursorVariant={cursorVariant}/>
              <div className='flex flex-col justify-center items-center gap-10 my-5'>
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
                  onMouseEnter={() => setCursorVariant('text')} 
                  onMouseLeave={() => setCursorVariant('default')}
                  className='font-allison text-[36px] xl:text-[45px] font-normal'
                >
                    My Tech Skills
                </motion.h2>
                <TechSkills />
                <div className='flex flex-col justify-center items-center gap-3 mb-8 mx-4 md:mx-10'>
                  <h2 
                    className='text-[24px] font-semibold text-[#F1D302]'
                    onMouseEnter={() => setCursorVariant('text')} 
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    Javascript
                  </h2>
                  <p 
                    className='text-[16px] font-light text-center sm:mx-44 lg:mx-64 mx-2'
                    onMouseEnter={() => setCursorVariant('text')} 
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    While the world searches for profound truths, I&apos;m here fixing those pesky missing semicolons. Coding is my art, and I turn caffeine into creativity, one line at a time.
                  </p>
                </div>
                
              </div>

            </div>
      </CursorContext.Provider>
    </div>
    );
}

export default Skills