"use client";
import Header from "@/components/Header";
import ThreeModle from "@/components/Home/ThreeModle";
import Introduction from "@/components/Home/Introduction";
import Cursor from "@/components/shared/Cursor";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };

  return (
      <div className="text-white min-h-[100vh] flex flex-col items-center justify-between gap-2 backgroundGradient">
          <ThreeModle />
        <div className="z-50">
          <CursorContext.Provider value={cursorInfo}>
            <Header />
            <Introduction />
            <Cursor cursorVariant={cursorVariant} />
          </CursorContext.Provider>
        </div>
      </div>
  );
}
