"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SecondHero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);

  return (
    <div ref={container}>
      {/* <div className="md:flex md:gap-4 items-center">
        <h2 className="max-w-[57rem] text-[2rem] px-8 pt-2 md:text-[3rem] bg-gradient-to-bl from-customPink via-customRed to-customOrange bg-clip-text text-transparent">Camp som en ægte viking – og skrål til musikken som en kriger på...</h2>
      </div>
        <div className="pt-10 md:pt-0 grid place-content-center md:place-content-end">
          <FaArrowDown className="text-customOrange h-10 md:h-14 animate-bounce w-full md:self-end md:pr-[30rem]" />
        </div> */}
      <div className="h-[80vh] md:h-[200vh] relative">
        <div className="sticky overflow-hidden top-0 h-[100vh]">
          <motion.div style={{ scale, transformOrigin: "43% 38%" }} className="w-full h-full absolute top-10 flex items-center justify-center">
            <div className="md:relative  md:w-[55vw] md:h-[70vh] ">
              <h1 className={`${ceasarDressing.className} text-[5rem] md:text-[15rem]`}>FOOFEST</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
