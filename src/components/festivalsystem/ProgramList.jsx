"use client";
import React, { useState, useEffect } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
import Headline from "@/components/global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ProgramList({ mergedArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag
  useEffect(() => {
    const today = new Date().toLocaleDateString("en", { weekday: "short" }).toLowerCase();
    setSelectedDay(today);

    // Loading Animation
    if (mergedArray) {
      setIsLoading(false);
    }
  }, [mergedArray]);

  // Opdaterer den valgte dag
  const filterActsByDay = (day) => {
    setSelectedDay(day);
  };

  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "bands" ud fra sammenlignign af starttidspunkterne
  const sortedByTime = (scene) => {
    return mergedArray
      .filter((band) => band.scene === scene && band.day === selectedDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="flex justify-center flex-wrap my-8 mb-20 gap-5">
            {days.map((day) => (
              <button key={day} className={`${selectedDay === day ? "bg-customOrange text-white" : "bg-customBlack border-solid border-[1px] border-customOrange text-white"} px-4 py-1`} onClick={() => filterActsByDay(day)}>
                {day}
              </button>
            ))}
          </div>
          <section className="p-2 md:px-6">
            <div className="grid md:grid-cols-[.5fr_1fr] mb-40">
              <div className="sticky top-0 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                <h1 className={`${ceasarDressing.className} text-4xl md:text-6xl`}>MIDGARD</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
                {sortedByTime("Midgard").map((band) => (
                  <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-[.5fr_1fr]">
              <div className="sticky top-0 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                <h1 className={`${ceasarDressing.className} text-4xl md:text-6xl`}>VANAHEIM</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {sortedByTime("Vanaheim").map((band) => (
                  <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-[.5fr_1fr]">
              <div className="sticky top-0 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                <h1 className={`${ceasarDressing.className} text-4xl md:text-6xl`}>JOTUNHEIM</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {sortedByTime("Jotunheim").map((band) => (
                  <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logoCredits={band.logoCredits} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ProgramList;

{
  /* <div className="grid grid-cols-[auto_.5fr_1fr]">
<div className="sticky top-0 self-start">
  <Headline src={MusicRune} text="MIDGARD" />
</div>
<div className="flex gap-4 overflow-x-scroll  mb-20 snap-mandatory snap-x">
  {sortedByTime("Midgard").map((band) => (
    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
  ))}
</div>
</div>
<div>
<Headline src={MusicRune} text="VANAHAIM" />
<div className="flex gap-4 overflow-x-scroll mb-20 snap-mandatory snap-x">
  {sortedByTime("Vanaheim").map((band) => (
    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
  ))}
</div>
</div>
<div>
<Headline src={MusicRune} text="JOTUNHEIM" />
<div className="flex gap-4 overflow-x-scroll mb-20 snap-mandatory snap-x">
  {sortedByTime("Jotunheim").map((band) => (
    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logoCredits={band.logoCredits} />
  ))}
</div>
</div> */
}
