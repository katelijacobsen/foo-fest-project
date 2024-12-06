"use client";
import { useState } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
const ProgramList = ({ bandsByScene }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  // Funktion til at håndtere klik på en dag
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Filtrér data baseret på den valgte dag
  const filteredData = Object.entries(bandsByScene).reduce((acc, [scene, days]) => {
    const filteredDays = days.filter((dayData) => !selectedDay || dayData.day === selectedDay);
    if (filteredDays.length > 0) {
      acc[scene] = filteredDays;
    }
    return acc;
  }, {});

  const allDays = [
    ...new Set(
      Object.values(bandsByScene)
        .flat()
        .map((dayData) => dayData.day)
    ),
  ]; // Find unikke dage på tværs af alle scener

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
        {/* Tilføj en knap til at nulstille filter */}
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

// <div>
//   {Object.entries(bandsByScene).map(([scene, days]) => (
//     <div key={scene}>
//       <h2>{scene}</h2>
//       {days.map(({ day, bands }) => (
//         <div key={day}>
//           {bands.map((band) => (
//             <BandCard key={band.slug} band={band} />
//           ))}
//         </div>
//       ))}
//     </div>
//   ))}
// </div>

{
  /* <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3> */
}

{
  /* <ul className="flex">
  {daysOfWeek.map((dayKey) => (
    <li className="p-4" key={dayKey}>
      <button>{dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}</button>
    </li>
  ))}
</ul> */
  // <div>
  //   <div>
  //     {bands.map((band) => (
  //       <BandCard key={band.slug} band={band} />
  //     ))}
  //   </div>
  // </div>
}

// const [bands, setBands] = useState(initialBands);
// const [schedule, setSchedule] = useState(initialSchedule);
// const [events, setEvents] = useState(initialEvents);

// const daysOfWeek = Object.keys(schedule.Midgard);

// initialBands, initialSchedule, initialEvents, combinedData, bands,
