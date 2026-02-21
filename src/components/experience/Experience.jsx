"use client";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";
import Cursor from "../shared/Cursor";
import Timeline from "./Timeline";

const Experience = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };

  return (
    <div className="z-50 w-full flex flex-col items-center">
      <CursorContext.Provider value={cursorInfo}>
        <Header style="flex w-[100vw] justify-around items-center z-[995] mt-4 max-w-[1500px] gap-10" />
        <Timeline />
        <Cursor cursorVariant={cursorVariant} />
      </CursorContext.Provider>
    </div>
  );
};

export default Experience;
