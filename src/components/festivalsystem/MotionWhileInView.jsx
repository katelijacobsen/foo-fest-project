"use client";
import { Caesar_Dressing } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AnimatedTextSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Tjek skærmstørrelse
    const checkScreenWidth = () => setIsMobile(window.innerWidth <= 768);
    checkScreenWidth(); // Tjek ved første render
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  // Brug scroll til at styre animationen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animationer for hvert ord baseret på enhed
  const festivalX = useTransform(scrollYProgress, [0.1, 0.9], isMobile ? ["-100%", "-20%"] : ["-170%", "-111%"]);
  const enderX = useTransform(scrollYProgress, [0.1, 0.9], isMobile ? ["6%", "-50%"] : ["270%", "64%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className={`h-[70vh] md:h-[80vh] flex items-center justify-center ${ceasarDressing.className} overflow-hidden`}>
      <div className="relative">
        <motion.div style={{ x: festivalX, opacity }} className="text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold absolute top-[-100px] md:top-[-140px] left-0 bg-gradient-to-bl from-customPink via-customRed to-customOrange bg-clip-text text-transparent">
          FESTIVALEN
        </motion.div>
      </div>
      <div className="relative">
        <motion.div style={{ opacity }} className="text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold bg-gradient-to-bl from-customPink via-customRed to-customOrange bg-clip-text text-transparent">
          DER ALDRIG
        </motion.div>
      </div>
      <div className="relative">
        <motion.div style={{ x: enderX, opacity }} className="text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold absolute top-[30px] md:top-[80px] right-[-100px] bg-gradient-to-bl from-customPink via-customRed to-customOrange bg-clip-text text-transparent">
          ENDER
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedTextSection;
