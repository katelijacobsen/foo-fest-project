"use client";
import React, { useState, useEffect } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
import Headline from "@/components/global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";
import SecondButton from "@/components/global/buttonFolder/SecondButton";

function ProgramList({ mergedArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
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
  // Sorterer herefter "acts" ud fra sammenlignign af starttidspunkterne
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
              <button key={day} className={`border-solid border-customOrange border-[2px] px-4 py-2`} onClick={() => filterActsByDay(day)}>
                {day}
              </button>
            ))}
          </div>
          <section>
            <Headline src={MusicRune} text="MIDGARD" />

            <div className="flex gap-8 overflow-x-scroll  mb-20 snap-mandatory snap-x">
              {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
              {sortedByTime("Midgard").map((band) => (
                <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
              ))}
            </div>

            <Headline src={MusicRune} text="VANAHAIM" />
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Vanaheim").map((band) => (
                <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
              ))}
            </div>

            <Headline src={MusicRune} text="JOTUNHEIM" />
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Jotunheim").map((band) => (
                <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logoCredits={band.logoCredits} />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ProgramList;
