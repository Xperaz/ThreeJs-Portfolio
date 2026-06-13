"use client";
import { motion } from "framer-motion";

// Shared heading animation: a smooth fade + slide-up of the whole title.
// Forwards extra props (e.g. cursor onMouseEnter/onMouseLeave) to the heading.
const AnimatedTitle = ({ children, className = "", delay = 1, ...props }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitle;
