"use client";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";
import { useState } from "react";
import Cursor from "../shared/Cursor";
import ContactContainer from "./ContactContainer";
import Intro from "./Intro";

const Contact = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };
  return (
      <CursorContext.Provider value={cursorInfo}>
          <div className="z-50">
            <Cursor cursorVariant={cursorVariant} />
            <Header />
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full lg:h-[90vh] gap-6 max-w-[1500px] mx-5 sm:mx-0">
              <Intro />
              <ContactContainer />
            </div>
          </div>
      </CursorContext.Provider>
  );
};

export default Contact;
