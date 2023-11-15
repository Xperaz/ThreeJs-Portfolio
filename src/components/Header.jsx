"use client";
import Navbar from "./shared/Navbar";
import Link from "next/link";
import { useContext, useState } from "react";
import CursorContext from "@/context/CursorContext";
import Logo from "./shared/Logo";
import Social from "./shared/Social";

const Header = () => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="flex justify-around align-center mt-6 z-[995] scroll-smooth lg:gap-28 sm:gap-10 gap-32">
      <Link
        href={"/"}
        className={``}
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <Logo />
      </Link>

      <Navbar />
      <Social style="hidden sm:flex justify-between align-center gap-4 mt-4"/>
    </div>
  );
};

export default Header;
