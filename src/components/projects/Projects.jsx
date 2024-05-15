"use client";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";
import { useState } from "react";
import ShowCase from "./ShowCase";

const Projects = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };

  return (
    <div className="z-50">
      <CursorContext.Provider value={cursorInfo}>
        <Header />
        <ShowCase />
      </CursorContext.Provider>
    </div>
  );
};

export default Projects;
