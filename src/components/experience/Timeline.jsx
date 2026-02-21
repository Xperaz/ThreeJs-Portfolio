"use client";
import { experiences } from "../constant";
import { motion } from "framer-motion";

const TimelineCard = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full md:justify-center items-start`}
    >
      {/* Desktop: alternating layout */}
      {/* Left content area */}
      <div className="hidden md:flex md:w-[45%] justify-end">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.25 + 0.5 }}
            className="timeline-card mr-8"
          >
            <CardContent experience={experience} />
          </motion.div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.25 + 0.3 }}
          className="timeline-dot"
        />
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Right content area */}
      <div className="hidden md:flex md:w-[45%] justify-start">
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.25 + 0.5 }}
            className="timeline-card ml-8"
          >
            <CardContent experience={experience} />
          </motion.div>
        )}
      </div>

      {/* Mobile: single column layout */}
      <div className="flex md:hidden w-full">
        <div className="flex flex-col items-center mr-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.25 + 0.3 }}
            className="timeline-dot"
          />
          {!isLast && <div className="timeline-line" />}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.25 + 0.5 }}
          className="timeline-card flex-1 mb-8"
        >
          <CardContent experience={experience} />
        </motion.div>
      </div>
    </div>
  );
};

const CardContent = ({ experience }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {experience.title}
          </h3>
          <p className="text-[#da4ea2] text-sm sm:text-base font-medium">
            {experience.company}
            {experience.type && (
              <span className="text-gray-400 ml-1">({experience.type})</span>
            )}
          </p>
        </div>
        <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
          {experience.date}
        </span>
      </div>
      <ul className="space-y-2 mb-4">
        {experience.description.map((item, i) => (
          <li
            key={i}
            className="text-gray-300 text-sm leading-relaxed flex gap-2"
          >
            <span className="text-[#da4ea2] mt-1 shrink-0">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

const Timeline = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-16">
      <motion.h2
        initial={{ z: -500, opacity: 0, scale: 0.5 }}
        animate={{ z: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="font-allison text-[36px] xl:text-[45px] font-normal my-8"
      >
        My Experience
      </motion.h2>

      <div className="w-full max-w-[1000px] mt-4">
        {experiences.map((experience, index) => (
          <TimelineCard
            key={`exp_${index}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
