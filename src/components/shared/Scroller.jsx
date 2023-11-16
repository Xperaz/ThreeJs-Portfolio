'use client'
import { useState } from "react";
import { useEffect } from "react";

const Scroller = () => {
  const [hideScrollIcon, setHideScrollIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setHideScrollIcon(isAtEnd);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      { !hideScrollIcon &&
        <div className="scroll-container flex flex-col gap-16">
          <div className="arrow-scroll">
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
          </div>
        </div>
      }
    </>
  );
};

export default Scroller;
