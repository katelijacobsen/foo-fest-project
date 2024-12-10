"use client";
import { useState, useEffect } from "react";
import BandCard from "./BandCard";

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
    <section>
      <div>
        <h1 className="text-2xl font-bold mb-4">Bands der spiller i dag: {currentDay}</h1>

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
    </section>
  );
};

export default ProgramForCurrentDay;
