import { projects } from "../constant";
import { motion } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/context/CursorContext";
import Project from "./Project";

const ShowCase = () => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="md:flex md:justify-center md:items-center md:w-full md:h-[90vh]">
      <div className="flex flex-col justify-center items-center lg:mx-28 gap-6 max-w-[1200px]">
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
          className="font-allison text-[36px] xl:text-[45px] font-normal my-4 lg:ml-[100px]"
        >
          My Projects
        </motion.h2>
        <div className="w-full lg:ml-[100px]">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {projects.map((project, index) => (
              <Project key={"projec_" + index} index={index} {...project} />
            ))}
          </div>
        </div>

        </div>
    </div>
  );
};

export default ShowCase;
