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
      <div className="text-white w-full min-h-[100vh] flex flex-col items-center backgroundGradient">
        <ThreeModle />
        <div className="z-50">
          <CursorContext.Provider value={cursorInfo}>
            <Header style={'flex w-[100vw] justify-around items-center z-[995] mt-4 max-w-[1500px] gap-10'}/>
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
