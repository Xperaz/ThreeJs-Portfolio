import { projects } from "../constant";
import AnimatedTitle from "@/components/shared/AnimatedTitle";
import Project from "./Project";

const ShowCase = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:w-full">
      <div className="flex flex-col justify-center items-center lg:mx-28 gap-6 max-w-[1200px]">
        <AnimatedTitle className="font-allison text-[36px] xl:text-[45px] font-normal my-4">
          My Projects
        </AnimatedTitle>
        <div className="w-full">
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
