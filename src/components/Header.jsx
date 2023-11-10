"use client";
import Navbar from "./shared/Navbar";
import Image from "next/image";
import github from "@/../public/icons/github.svg";
import linkden from "@/../public/icons/linkden.svg";
import Link from "next/link";
import { useContext } from "react";
import CursorContext from "@/context/CursorContext";
import Logo from "./shared/Logo";

const Header = () => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <div className="flex justify-around align-center mt-6 z-[995]">
      <Link
        href={"/"}
        className={``}
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <Logo />
      </Link>
      <Navbar />
      <ul
        className="flex justify-between align-center gap-4 mt-4"
        onMouseEnter={() => setCursorVariant("navLinks")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <Link href={"https://www.linkedin.com/in/azedineouhadou/"}>
          <Image
            src={linkden}
            alt="Azedine Ouhadou linkden link"
            width={25}
            height={25}
          />
        </Link>
        <Link href={"https://github.com/Xperaz"}>
          <Image
            src={github}
            alt="Azedine Ouhadou github link"
            width={25}
            height={25}
          />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
