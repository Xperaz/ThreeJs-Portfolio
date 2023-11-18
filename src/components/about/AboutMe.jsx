import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import profile from "@/../public/personal/profile.jpeg"
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-500vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-[100vh] w-[800vw] flex relative">
          <motion.div 
            initial={{opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
              delay: 0.3,
              duration: 0.6
            }}
            className="about-scroll-section"
          >
            <div className="relative ">
              <Image src={profile} alt="azedine ouhadou profile picture" width={192} height={192} priority={true} quality={95} 
                className="h-24 w-24 sm:h-32 sm:w-32 object-fit rounded-full border-[0.3rem] border-white shadow-md mb-2" 
              />
              <span className="text-2xl sm:text-4xl absolute bottom-0 right-4">👋🏻</span>
            </div>
            <h3>Azedine Ouhadou</h3>
            <p>Software Engineer</p>
          </motion.div>
           
          <div className="about-scroll-section">
            <h3>Front-End Developer</h3>
            <p>Focused on React and Next.js</p>
          </div>
          <div className="about-scroll-section">
            <h3>Passionate about User Experience</h3>
            <p>Advocate for Web Accessibility</p>
          </div>
          <div className="about-scroll-section">
            <h3>Learning and Growth</h3>
            <p>eager to learn new things</p>
          </div>
          <div className="about-scroll-section">
            <h3>Problem Solver</h3>
            <p>critical thinking, decision-making</p>
          </div>
          <div className="about-scroll-section">
            <h3>Fun Fact</h3>
            <p>I&apos;m a Coffee Enthusiast</p>
            <button className=" bg-white text-black rounded-full p-2 fixed bottom-[30vh]" onClick={() => window.scrollTo(0, 0)}>back to top</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
