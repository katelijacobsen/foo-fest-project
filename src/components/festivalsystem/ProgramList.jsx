"use client";
import { useState } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
const ProgramList = ({ bandsByScene }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  // Funktion til at håndtere klik på en dag - bruges til filtrering af bands i forhold til ugedage
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Filtrér data baseret på den valgte dag
  //konverterer bandsByScene til en liste af scener og deres dage fx ["Midgard", [{ day: "mon", bands: [...] }, { day: "tue", bands: [...] }]]
  //  //.reduce(): bygger et nyt objekt (accumulator), hvor vi kun beholder de scener og dage, der matcher den valgte dag (selectedDay).
  const filteredData = Object.entries(bandsByScene).reduce((accumulator, [scene, days]) => {
    //days.filter((dayData) => !selectedDay || dayData.day === selectedDay): hvis ingen dag er valgt (!selectedDay), beholder vi alle dage || hvis en dag er valgt, beholder vi kun data for den specifikke dag.
    //fx hvis selectedDay er "mon", beholder vi kun { day: "mon", bands: [...] }
    const filteredDays = days.filter((dayData) => !selectedDay || dayData.day === selectedDay);
    //hvis der stadig er dage tilbage efter filtreringen, gemmer vi dem under scenens navn i det nye objekt.
    if (filteredDays.length > 0) {
      //Tilføjer de filtrerede dage for scenen til resultatet.
      accumulator[scene] = filteredDays;
    }
    return accumulator;
  }, {});

  //find alle dage
  const allDays = [
    //Bruger en Set() til at fjerne dubletter, så vi kun har unikke dage. Vi ville ikke have brug for det, hvis hver dag kun havde én optræden. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
    ...new Set(
      //Får alle værdier fra bandsByScene (dvs. lister af dage for hver scene) fx [
      //   [{ day: "mon", bands: [...] }, { day: "tue", bands: [...] }],
      //   [{ day: "mon", bands: [...] }]
      // ]
      Object.values(bandsByScene)
        //.flat(): samler alle lister af dage i én samlet array fx [{ day: "mon", bands: [...] }, { day: "tue", bands: [...] }, { day: "wed", bands: [...] }] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
        .flat()
        //Ekstraherer kun dagene ("mon", "tue", osv.) fx ["mon", "tue", "wed"]
        .map((dayData) => dayData.day)
    ),
  ];

  return (
    <section className="max-w-screen-xl mx-auto">
      {/* Liste med ugedage */}
      <ul className="flex flex-wrap place-self-center">
        {allDays.map((day) => (
          <li key={day} className="p-1">
            <button className={`${selectedDay === day ? "bg-customOrange text-white" : "bg-customBlack border-solid border-[1px] border-customOrange text-white"} px-4 py-1`} onClick={() => handleDayClick(day)}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          </li>
        ))}
        {/* Knap til at nulstille filter */}
        <li className="p-1">
          <button className={`${!selectedDay ? "bg-customOrange text-white" : "bg-customBlack text-white border-solid border-[1px] border-customOrange"} px-4 py-1`} onClick={() => handleDayClick(null)}>
            Alle dage
          </button>
        </li>
      </ul>

      {/* Liste med scener og bands */}
      {Object.entries(filteredData).map(([scene, days]) => (
        <div key={scene}>
          <h2 className="text-xl font-bold">{scene}</h2>
          {days.map((dayData) => (
            <div key={dayData.day}>
              <h3 className="text-lg font-semibold">{dayData.day.toUpperCase()}</h3>
              <div className="overflow-x-auto">
                <div className="flex gap-2">
                  {dayData.bands.map((band) => (
                    <BandCard key={band.slug} band={band} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProgramList;
