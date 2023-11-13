"use client";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";
import AboutMe from "./AboutMe";

const About = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };
  return (
    <CursorContext.Provider value={cursorInfo}>
      <Header />
      <AboutMe />
    </CursorContext.Provider>
  );
};

export default About;
