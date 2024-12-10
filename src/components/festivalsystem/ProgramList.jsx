"use client";
import React, { useState, useEffect } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
import Headline from "@/components/global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";

function ProgramList({ mergedArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    const today = new Date().toLocaleDateString("en", { weekday: "short" }).toLowerCase();
    setSelectedDay(today);

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
      .filter((act) => act.scene === scene && act.day === selectedDay)
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
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </button>
            ))}
          </div>
          <section>
            <Headline src={MusicRune} text="MIDGARD" />
            <div className="overflow-x-auto ">
              <div className="flex gap-2">
                {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
                {sortedByTime("Midgard").map((act) => (
                  <BandCard slug={act.slug} src={act.logo} key={act.name} name={act.name} genre={act.genre} start={act.eventInfo.start} end={act.eventInfo.end} day={act.day} logo={act.logo} logoCredits={act.logoCredits} scene={act.scene} />
                ))}
              </div>
            </div>
            <Headline src={MusicRune} text="VANAHEIM" />
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Vanaheim").map((act) => (
                <BandCard slug={act.slug} src={act.logo} key={act.name} name={act.name} genre={act.genre} start={act.eventInfo.start} end={act.eventInfo.end} day={act.day} logo={act.logo} logoCredits={act.logoCredits} scene={act.scene} />
              ))}
            </div>
            <Headline src={MusicRune} text="JOTUNHEIM" />
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Jotunheim").map((act) => (
                <BandCard slug={act.slug} src={act.logo} key={act.name} name={act.name} genre={act.genre} start={act.eventInfo.start} end={act.eventInfo.end} day={act.day} logo={act.logo} logoCredits={act.logoCredits} scene={act.scene} />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ProgramList;
