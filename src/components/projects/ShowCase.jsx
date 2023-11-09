import { Tilt } from "react-tilt";
import { projects } from "../constant";
import github from "@/../public/icons/github.svg";
import { motion } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/context/CursorContext";
import Image from "next/image";

const Project = ({
  index,
  title,
  url,
  image,
  description,
  technologies_used,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -50,
        translateY: 50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#6c6c6f]/50 p-4 rounded-3xl sm:w-[340px]"
      >
        <div className="relative h-[230px] w-full">
          <Image
            className="rounded-2xl"
            src={image}
            alt={title + " image"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(url, "_blank")}
            className="black-gradient w-8 h-8 rounded-full cursor-pointer flex justify-center items-center"
          >
            <Image
              src={github}
              alt={"github icon"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "50%" }}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-[#ffffffd0] text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies_used.map((technology, index) => (
            <p
              key={technology + index}
              className={`${technology.color} text-[14px]`}
            >
              {technology.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ShowCase = () => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-4 mx-28 z-1">
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
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
        className="font-BlackStone text-[36px] font-normal"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center  gap-6">
        {projects.map((project, index) => (
          <Project key={"projec_" + index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ShowCase;
