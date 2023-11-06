import React from 'react'

const Introduction = ({updateCursorState}) => {

  const textEnter = () => {
    updateCursorState("text");
  }
  
  const textLeave = () => {
    updateCursorState("default");
  }

  return (
    //search for how to center element in better way
    <div className='center-model w-full mt-10'>
      <div className='flex flex-col justify-between items-start m-auto mx-64 z-50'>
          <h2 className={`font-BlackStone text-[45px] font-normal`} onMouseEnter={textEnter} onMouseLeave={textLeave} >Hi There !</h2>
          <p className='text-[16px] font-light' onMouseEnter={textEnter} onMouseLeave={textLeave} >I am Azedine Ouhadou, a Software Engineer focuses on Front-End. My code is where creativity meets precision. Explore my skills, projects, and journey in About Me. If we align, let's craft digital masterpieces together at Hire Me.</p>
      </div>
    </div>
  )
}

export default Introduction