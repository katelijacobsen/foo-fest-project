"use client";
import { useState } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
const ProgramList = ({ initialBands, initialSchedule, initialEvents, bandsCombinedWithEvents }) => {
  const [bands, setBands] = useState(initialBands);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [events, setEvents] = useState(initialEvents);
  const [combined, setCombined] = useState(bandsCombinedWithEvents);

  const daysOfWeek = Object.keys(schedule.Midgard);

  const getBandsEvents = (bandName) => {
    return events.filter((event) => event.act.act === bandName);
  };

  return (
    <div>
      <ul className="flex">
        {daysOfWeek.map((dayKey) => (
          <li className="p-4" key={dayKey}>
            <button>{dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}</button>
          </li>
        ))}
      </ul>
      <div>
        {combined.map((band) => {
          //   const bandSchedule = getBandSchedule(band.name);
          const bandEvents = getBandsEvents(band.name);

          return (
            <BandCard
              key={band.slug}
              band={band}
              bandEvents={bandEvents} // Send tidsplanen med til BandCard
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgramList;

// Funktion til at finde tidsplanen for et band
//   const getBandSchedule = (bandName) => {
//     for (const dayKey of daysOfWeek) {
//       const daySchedule = schedule.Midgard[dayKey];
//       for (const slot of daySchedule) {
//         if (slot.act === bandName) {
//           return {
//             day: dayKey,
//             start: slot.start,
//             end: slot.end,
//           };
//         }
//       }
//     }
//     return null;
//   };
