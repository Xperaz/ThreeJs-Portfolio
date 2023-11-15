import Image from "next/image";
import github from "@/../public/icons/github.svg";
import linkden from "@/../public/icons/linkden.svg";
import Link from "next/link";
import { useContext } from "react";
import CursorContext from "@/context/CursorContext";

const Social = ({style}) => {
    const {setCursorVariant} = useContext(CursorContext);

  return (
    <ul className={`${style}`}
    onMouseEnter={() => setCursorVariant("navLinks")}
    onMouseLeave={() => setCursorVariant("default")}
>
    
    <Link href={"https://www.linkedin.com/in/azedineouhadou/"}>
          <Image
            src={linkden}
            alt="Azedine Ouhadou linkden link"
            width={25}
            height={25}
            priority={false}
          />
        </Link>
        <Link href={"https://github.com/Xperaz"}>
          <Image
            src={github}
            alt="Azedine Ouhadou github link"
            width={25}
            height={25}
            priority={false}
          />
        </Link>
    </ul>
  )
}

export default Social