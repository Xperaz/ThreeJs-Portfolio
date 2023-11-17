import { skills } from '../constant'
import Image from "next/image";
import { motion } from 'framer-motion';


export const Skill = ({icon, style }) => {

  return (
      <Image src={icon} width={200} height={200} alt="icon" className={`${style} hover:transition hover:scale-110`} />
  )
}

const TechSkills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 lg:mx-80 mx-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="w-24 h-24 -z-1"
          initial={{
            opacity: 0,
            translateX: -50,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
          <Skill icon={skill.icon} style={skill.style} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechSkills;
