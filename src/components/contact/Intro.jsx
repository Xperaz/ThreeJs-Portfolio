import CursorContext from "@/context/CursorContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const Intro = () => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="flex flex-col items-start justify-center lg:mx-64">
      <motion.h2
        initial={{
          z: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          z: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1,
        }}
        className={`font-BlackStone text-[45px] font-normal`}
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        Hire me
      </motion.h2>
      <motion.p
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-[20px] font-light"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        Welcome again to my portfolio! If you have any questions or if
        you&apos;d like to discuss a project or job offer, feel free to get in
        touch. I&apos;m always open to new opportunities and collaborations.
      </motion.p>
    </div>
  );
};

export default Intro;
