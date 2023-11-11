"use client";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";

const About = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };
  return (
    <CursorContext.Provider value={cursorInfo}>
      <Header />
    </CursorContext.Provider>
  );
};

export default About;
