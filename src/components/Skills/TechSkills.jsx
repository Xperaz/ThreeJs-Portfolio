import { technologies } from "../constant";
import BallCanvas from "./Ball";
import { motion } from "framer-motion";
import { useState } from "react";

const TechSkills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 mx-80">
      {technologies.map((technology, i) => (
        <motion.div
          key={technology.name}
          className="-z-10 w-24 h-24"
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -100 : 100,
            translateY: -1000,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.4, delay: i * 0.27 }}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechSkills;
