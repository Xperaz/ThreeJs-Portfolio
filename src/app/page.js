"use client";
import Header from "@/components/Header";
import Cursor from "@/components/shared/Cursor";
import { useState } from "react";
import CursorContext from "@/context/CursorContext";
import Cv from "@/components/shared/Cv";
import ThreeModle from "@/components/home/ThreeModle";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorInfo = { cursorVariant, setCursorVariant };

  return (
      <div className="realtive text-white min-h-[100vh] flex flex-col items-center justify-between gap-2 backgroundGradient overflow-y-scroll float-none bg-scroll">
        <ThreeModle />
        <div className="z-50">
          <CursorContext.Provider value={cursorInfo}>
            <Header />
            <Introduction />
            <div className="home-cv">
              <Cv />
            </div>
            <Cursor cursorVariant={cursorVariant} />
          </CursorContext.Provider>
        </div>
      </div>
  );
}
