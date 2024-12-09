"use client";
import { useState, useEffect } from "react";
import BandCard from "./BandCard";
import Headline from "../global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

const ProgramForCurrentDay = ({ bandsByScene }) => {
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date();
    setCurrentDay(daysOfWeek[today.getDay()]);
  }, []);

  const filteredData = Object.entries(bandsByScene).reduce((accumulator, [scene, days]) => {
    const bandsForToday = days.find((dayData) => dayData.day === currentDay);

    if (bandsForToday) {
      accumulator[scene] = bandsForToday.bands;
    }
    return accumulator;
  }, {});

  return (
    <section className=" py-6 px-4">
      <div>
        <Headline src={MusicRune} text="DAGENS PROGRAM" />
      </div>
      <div>
        {/* <h1 className="text-2xl font-bold mb-4">Bands der spiller i dag: {currentDay}</h1> */}
        {Object.entries(filteredData).map(([scene, bands]) => (
          <div key={scene}>
            <h2 className="text-xl font-semibold">{scene}</h2>
            <div className="grid grid-cols-3 gap-4">
              {bands.map((band) => (
                <BandCard key={band.slug} band={band} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid place-content-center pt-8">
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Se det fulde lineup" />
      </div>
    </section>
  );
};

export default ProgramForCurrentDay;
