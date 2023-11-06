"use client";
import Header from "@/components/Header";
import ThreeModle from "@/components/Home/ThreeModle";
import Introduction from "@/components/Home/Introduction";
import Cursor from "@/components/shared/Cursor";
import { useState } from "react";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const updateCursorState = (variant) => {
    setCursorVariant(variant);
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="text-white w-full min-h-[100vh] flex flex-col align-center justify-between gap-2 backgroundGradient">
      <ThreeModle />
      <div className="z-50">
        <Header updateCursorState={updateCursorState} />
        <Introduction updateCursorState={updateCursorState} />
        <Cursor cursorVariant={cursorVariant} />
      </div>
    </div>
  );
}
