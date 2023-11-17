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

const MyLink = ({ navLink, isActive }) => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
    <li className="hover:text-[#ddd]">
      <Link
        onMouseEnter={() => setCursorVariant("navLinks")}
        onMouseLeave={() => setCursorVariant("default")}
        className={`${
          isActive ? "border border-[#fff] px-2 py-1 rounded-full" : ""
        }`}
        href={
          navLink === "/" || navLink === "Home"
            ? "/"
            : `/${navLink.toLowerCase()}`
        }
      >
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
      <div className="hidden sm:flex flex-col justify-center rounded-full h-12 bg-[#6c6c6f]/50 p-3 lg:px-5 md:px-3 text-sm">
          <ul className="flex justify-between align-center lg:gap-10 md:gap-8 text-white">
            <MyLink navLink="Home" isActive={pathname === "/" ? true : false} />
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

        </div>

        <div className='sm:hidden flex flex-1 justify-btween items-center'>
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
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-[999] rounded-xl sidebar`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <MyLink navLink="Home" isActive={pathname === "/" ? true : false} />
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

              <Social style="flex flex-col gap-4 mt-10"/>

            </div>
        </div>
    </nav>
  );
};

export default Navbar;
