"use client";
import CursorContext from "@/context/CursorContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

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
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-center rounded-full h-12 bg-[#6c6c6f]/50 p-3 px-5 text-sm">
      <ul className="flex justify-between align-center gap-10 text-white">
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
