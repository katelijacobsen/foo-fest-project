// "use client";

// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
// import { FaArrowDown } from "react-icons/fa6";
// import { Caesar_Dressing } from "next/font/google";

// const ceasarDressing = Caesar_Dressing({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// const SecondHero = () => {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);

//   return (
//     <div ref={container}>
//       <div className=" h-[50vh] md:h-[200vh] relative">
//         <div className="h-[50vh] sticky overflow-hidden top-0 md:h-[100vh]">
//           <motion.div style={{ scale, transformOrigin: "43% 38%" }} className="w-full h-full absolute top-10 flex items-center justify-center">
//             <div className="w-[40vw]  md:relative  md:w-[55vw] md:h-[70vh] ">
//               <h1 className={`${ceasarDressing.className} text-[3rem] md:text-[15rem]`}>FOOFEST</h1>
//               <p className="text-sm md:text-2xl text-center">Scroll ind i FooFest universet</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondHero;

"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
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

  // Zoom animation, skalerer fra 1 til 30
  const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);

  return (
    <div ref={container}>
      <div className="h-[200vh] relative">
        <div className="h-[100vh] sticky overflow-hidden top-0 flex items-center justify-center">
          {/* Zoom container */}
          <motion.div
            style={{
              scale,
              transformOrigin: "38% 43%",
            }}
            className="w-full h-full absolute flex items-center justify-center"
          >
            <div className="relative w-[92%] h-[32%] md:h-[80%] md:w-[60%]">
              <h1 className={`${ceasarDressing.className} text-[7.4rem] md:text-[17rem]`}>FOOFEST</h1>
              <p className="text-sm md:text-2xl text-center">Scroll ind i FooFest universet</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
