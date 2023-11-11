"use client";
import CursorContext from "@/context/CursorContext";
import Header from "../Header";
import { useState } from "react";
import Cursor from "../shared/Cursor";
import ContactContainer from "./ContactContainer";

const Contact = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };
  return (
    <CursorContext.Provider value={cursorInfo}>
      <div className="z-50">
        <Cursor cursorVariant={cursorVariant} />
        <Header />
        <ContactContainer />
      </div>
    </CursorContext.Provider>
  );
};

export default Contact;
