import React from "react";
import ProgramList from "@/components/festivalsystem/ProgramList";

async function Page() {
  // const bands = await fetch("http://localhost:8080/bands").then((response) => response.json());
  // const schedule = await fetch("http://localhost:8080/schedule").then((response) => response.json());
  // const events = await fetch("http://localhost:8080/events").then((response) => response.json());

  // fetch datasæt med endpoint /bands
  const fetchBands = async () => {
    let response = await fetch("http://localhost:8080/bands");
    // let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    let data = await response.json();
    return data;
  };

  // fetch datasæt med endpoint /schedule
  const fetchSchedule = async () => {
    let response = await fetch("http://localhost:8080/schedule");
    // let response = await fetch("https://spring-awesome-stream.glitch.me/schedule");
    let data = await response.json();
    return data;
  };

  // fetch datasæt med endpoint /events
  const fetchEvents = async () => {
    let response = await fetch("http://localhost:8080/events");
    // let response = await fetch("https://spring-awesome-stream.glitch.me/events");
    let data = await response.json();
    return data;
  };
  // variabel for det data, som de tre datasæt retunerer - gør det muligt at bruge data lokalt i funktionen og sende dem videre som props til programlist-komponent
  const bands = await fetchBands();
  const schedule = await fetchSchedule();
  const events = await fetchEvents();

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
