"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { Caesar_Dressing } from "next/font/google";
import MyMarquee from "./MyMarquee";
import { FaArrowDown } from "react-icons/fa6";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ThirdHero = ({ text }) => {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 8, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.05,
      },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <div className="grid place-content-center h-[90vh]">
        <div className="flex justify-center items-center">
          {splittedText.map((current, index) => (
            <motion.div key={index} ref={ref} variants={pullupVariant} initial="initial" animate={isInView ? "animate" : ""} custom={index} className={`${ceasarDressing.className} text-8xl md:text-[12rem]`}>
              {current === " " ? <span>&nbsp;</span> : current}
            </motion.div>
          ))}
        </div>
        <div className="grid place-content-center p-4">
          <FaArrowDown className="text-customOrange w-12 h-12 animate-bounce" />
        </div>
      </div>
      <div>
        <MyMarquee />
      </div>
    </section>
  );
};

export default ThirdHero;
