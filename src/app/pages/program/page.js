import React from "react";
import ProgramList from "@/components/festivalsystem/ProgramList";

async function Page() {
  const bands = await fetch("http://localhost:8080/bands").then((response) => response.json());
  const schedule = await fetch("http://localhost:8080/schedule").then((response) => response.json());
  const events = await fetch("http://localhost:8080/events").then((response) => response.json());

  const scenes = ["Midgard", "Vanaheim", "Jotunheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const mergedData = bands.map((band) => {
    const mergedBand = { ...band };
    scenes.forEach((scene) => {
      days.forEach((day) => {
        if (schedule[scene][day].find((item) => item.act === band.name)) {
          const eventInfo = schedule[scene][day].find((item) => item.act === band.name);
          mergedBand.eventInfo = eventInfo;
          mergedBand.scene = scene;
          mergedBand.day = day;
        }
      });
    });
    return mergedBand;
  });

  return (
    <main>
      <h1 className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center text-fooYellow-200 mt-32`}>Program</h1>

      <ProgramList mergedArray={mergedData} days={days} />
    </main>
  );
}

export default Page;
