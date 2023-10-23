import Navbar from "./shared/Navbar";
import Image from "next/image";
import github from "@/../public/icons/github.svg";
import linkden from "@/../public/icons/linkden.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around align-center mt-6 z-[999]">
      <Link href={"/"} className={`font-BlackStone text-[45px] font-normal`}>
        AOUHADOU
      </Link>
      <Navbar />
      <ul className="flex justify-between align-center gap-4 mt-4">
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
    </header>
  );
};

export default Header;
