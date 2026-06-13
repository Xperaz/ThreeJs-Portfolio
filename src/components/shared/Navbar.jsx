"use client";
import CursorContext from "@/context/CursorContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import menu from "@/../public/icons/menu.svg";
import close from "@/../public/icons/close.svg";
import Image from "next/image";
import { useState } from "react";
import Social from "./Social";
import { motion, LayoutGroup } from "framer-motion";

const MyLink = ({ navLink, isActive }) => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <li className="relative">
      <Link
        onMouseEnter={() => setCursorVariant("navLinks")}
        onMouseLeave={() => setCursorVariant("default")}
        className={`relative z-10 inline-block px-3 py-1 rounded-full transition-colors duration-300 ${
          isActive ? "text-black" : "text-white hover:text-[#ddd]"
        }`}
        href={
          navLink === "/" || navLink === "Home"
            ? "/"
            : `/${navLink.toLowerCase()}`
        }
      >
        {isActive && (
          <motion.span
            layoutId="navHighlight"
            className="absolute inset-0 -z-10 rounded-full bg-white"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        {navLink === "/" ? "Home" : `${navLink}`}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="">
      <div className="hidden md:flex flex-col items-center rounded-full h-12 bg-[#6c6c6f]/50 p-3 lg:px-5 md:px-3 text-sm">
          <LayoutGroup id="nav-desktop">
            <ul className="flex justify-between items-center lg:gap-6 md:gap-4 text-white">
              <MyLink navLink="Home" isActive={pathname === "/" ? true : false} />
              <MyLink
                navLink={"Experience"}
                isActive={pathname === "/experience" ? true : false}
              />
              <MyLink
                navLink={"About"}
                isActive={pathname === "/about" ? true : false}
              />
              <MyLink
                navLink={"Skills"}
                isActive={pathname === "/skills" ? true : false}
              />
              <MyLink
                navLink={"Projects"}
                isActive={pathname === "/projects" ? true : false}
              />
              <MyLink
                navLink={"Contact"}
                isActive={pathname === "/contact" ? true : false}
              />
            </ul>
          </LayoutGroup>

        </div>

        <div className='md:hidden flex flex-1 justify-btween items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
            priority
          />
          
          <div
              className={`${
                !toggle ? "hidden" : "flex flex-col"
              } p-6 bg-[#6c6c6f] absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-[999] rounded-xl sidebar`}
            >
              <LayoutGroup id="nav-mobile">
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  <MyLink navLink="Home" isActive={pathname === "/" ? true : false} />
                  <MyLink
                    navLink={"Experience"}
                    isActive={pathname === "/experience" ? true : false}
                  />
                  <MyLink
                    navLink={"Projects"}
                    isActive={pathname === "/projects" ? true : false}
                  />
                  <MyLink
                    navLink={"Skills"}
                    isActive={pathname === "/skills" ? true : false}
                  />
                  <MyLink
                    navLink={"About"}
                    isActive={pathname === "/about" ? true : false}
                  />
                  <MyLink
                    navLink={"Contact"}
                    isActive={pathname === "/contact" ? true : false}
                  />
                </ul>
              </LayoutGroup>

              <Social style="flex flex-col gap-4 mt-10"/>

            </div>
        </div>
    </nav>
  );
};

export default Navbar;
