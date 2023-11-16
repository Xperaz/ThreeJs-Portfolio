import { technologies } from "../constant";
import BallCanvas from "./Ball";
import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from '../constant'
import Image from "next/image";


export const Skill = ({icon, style}) => {

  return (
    <Image src={icon} width={200} height={200} alt="icon"  className={`${style} hover:transition hover:scale-110`} />
  )
}

const TechSkills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 lg:mx-80 mx-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          className="w-24 h-24"
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -100 : 100,
            translateY: -1000,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.4, delay: i * 0.27 }}
        >
          <Skill icon={skill.icon} style={skill.style} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechSkills;
