import Navbar from "./shared/Navbar";
import Link from "next/link";
import { useContext} from "react";
import CursorContext from "@/context/CursorContext";
import Logo from "./shared/Logo";
import Social from "./shared/Social";

const Header = ({style}) => {
  const { setCursorVariant } = useContext(CursorContext);

  return (
      <div className={`${(style !== undefined) ? `${style} px-4` : `flex justify-around items-center z-[995] mt-4 px-4`}`}>
        <Link
          href={"/"}
          className={`lg:flex-1`}
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <Logo />
        </Link>

        <div className="lg:flex-3">
          <Navbar />
        </div>

        <Social style="hidden md:flex justify-end items-center gap-4 lg:flex-1"/>
      </div>
  );
};

export default Header;
