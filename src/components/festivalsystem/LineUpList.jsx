"use client";
import { useState, useEffect } from "react";
import LineUpCard from "@/components/festivalsystem/LineUpCard";
import { motion } from "framer-motion";
import Headline from "@/components/global/Headline";
import LineUpRune from "@/img/svg/lineup_rune.svg";

const LineUpList = ({ mergedData }) => {
  const [bands, setBands] = useState(mergedData);

  // Sortér bands alfabetisk efter navn
  useEffect(() => {
    const sortedBandsAlphabetic = [...mergedData].sort((a, b) => a.name.localeCompare(b.name));
    setBands(sortedBandsAlphabetic);
  }, [mergedData]);

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} animate={{ y: -40 }}>
      <section className="max-w-screen-xl mx-auto p-2 mt-32 md:mt-40 ">
        <div className="max-w-screen-xl mx-auto mb-10 pl-4">
          <Headline src={LineUpRune} text="2025 LINEUP" size="text-5xl md:text-6xl" width={45} height={45} />
        </div>
        <ul className="flex flex-wrap gap-8 justify-center items-center">
          {bands.map((band, index) => (
            <li key={index}>
              <LineUpCard key={index} slug={band.slug} logo={band.logo} name={band.name} day={band.day} start={band.eventInfo.start} end={band.eventInfo.end} scene={band.scene} />
            </li>
          ))}
        </ul>
      </section>
    </motion.section>
  );
};

export default LineUpList;
