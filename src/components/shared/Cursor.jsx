"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = ({cursorVariant}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 14,
      y: mousePosition.y - 14,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    navLinks: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <div className="z-50">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Cursor;
  
  
  
  
  