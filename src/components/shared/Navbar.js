"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const MyLink = ({ navLink, isActive }) => {
  return (
    <li>
      <Link
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
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-center rounded-full h-14 bg-[#6c6c6f] p-4 text-sm">
      <ul className="flex justify-between align-center gap-10">
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
    </nav>
  );
};

export default Navbar;
