"use client";
import { useState, useEffect } from "react";
import BandCard from "./BandCard";
import Headline from "../global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

const ProgramForCurrentDay = ({ mergedArray }) => {
  const [currentDay, setCurrentDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    const today = new Date().toLocaleDateString("en", { weekday: "short" }).toLowerCase();
    setCurrentDay(today);

    if (mergedArray) {
      setIsLoading(false);
    }
  }, [mergedArray]);

  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "acts" ud fra sammenlignign af starttidspunkterne
  const sortedByTime = (scene) => {
    return mergedArray
      .filter((band) => band.scene === scene && band.day === currentDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <section className="py-6 px-4 max-w-screen-xl mx-auto">
      <div>
        <Headline src={MusicRune} text={`DAGENS PROGRAM`} />
      </div>
      <section>
        <div>
          <Headline src={MusicRune} text="MIDGARD" />
          <div className="flex gap-4 overflow-x-scroll  mb-20 snap-mandatory snap-x">
            {sortedByTime("Midgard").map((band) => (
              <BandCard slug={band.slug} src={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logo={band.logo} logoCredits={band.logoCredits} scene={band.scene} />
            ))}
          </div>
        </div>
        <div className="pt-6">
          <Headline src={MusicRune} text="VANAHEIM" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
            {sortedByTime("Vanaheim").map((band) => (
              <BandCard slug={band.slug} src={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logo={band.logo} logoCredits={band.logoCredits} scene={band.scene} />
            ))}
          </div>
        </div>
        <div className="pt-6">
          <Headline src={MusicRune} text="JOTUNHEIM" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
            {sortedByTime("Jotunheim").map((band) => (
              <BandCard slug={band.slug} src={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logo={band.logo} logoCredits={band.logoCredits} scene={band.scene} />
            ))}
          </div>
        </div>
      </section>
      <div className="grid place-content-center pt-8">
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Se hele ugens program" />
      </div>
    </section>
  );
};

export default ProgramForCurrentDay;
