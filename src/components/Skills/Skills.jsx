"use client";
import Header from "../Header";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";
import Cursor from "../shared/Cursor";
import TechSkills from "./TechSkills";
import AnimatedTitle from "@/components/shared/AnimatedTitle";

const Skills = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };

  return (
    <div className="">
      <CursorContext.Provider value={cursorInfo}>
        <Cursor cursorVariant={cursorVariant} />
        <Header />
        <div className="xl:flex xl:justify-center xl:items-center xl:w-full xl:h-[90vh]">
          <div className="flex flex-col justify-center items-center gap-10 my-5 max-w-[1400px] xl:max-w-[1600px]">
            <AnimatedTitle
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
              className="font-allison text-[36px] xl:text-[45px] font-normal "
            >
              My Tech Skills
            </AnimatedTitle>
            <div className="">
              <TechSkills />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mb-8 mx-4 md:mx-10">
              <h2
                className="text-[24px] font-semibold text-[#F1D302]"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Javascript
              </h2>
              <p
                className="text-[16px] font-light text-center sm:mx-44 xl:mx-64 mx-2 leading-7"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                While the world searches for profound truths, I&apos;m here
                fixing those pesky missing semicolons. Coding is my art, and I
                turn caffeine into creativity, one line at a time.
              </p>
            </div>
          </div>
        </div>
      </CursorContext.Provider>
    </div>
  );
};

export default Skills;
