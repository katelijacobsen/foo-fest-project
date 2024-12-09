import ProgramList from "@/components/festivalsystem/ProgramList";

export default async function Page() {
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

  // Kombinerer /bands, /schedule og /events datasæt
  //bruger Object.entries til at konvertere et objekt (objekter i /schedule) til array med [key, value] par, så /schedule går fra at være et objekt, med objekter i til at være et array med arrays fx ["Midgard", { "mon": [...], "tue": [...] }]. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
  //.reduce(): for hver scene (fx "Midgard" og "Vanaheim") opbygger vi en ny struktur i accumulator (akkumulatoren), hvor vi grupperer bands efter scene og dag.
  const organizedByScene = Object.entries(schedule).reduce((accumulator, [scene, days]) => {
    // acc[scene]: opretter et objekt for hver scene fx accumulator["Midgard"] = [...];
    //Object.entries(days).map(([day, slots]): laver en liste over ugedage for scenen og deres tidsrum (slots) fx ["mon", [...]]..
    //.map(): For hver dag (fx "mon"), laves et nyt objekt, der indeholder day: navnet på dagen og bands: listen af bands der spiller den dag

    accumulator[scene] = Object.entries(days).map(([day, slots]) => {
      return {
        day,
        bands: slots

          .filter((slot) => slot.act !== "break")
          .map((slot) => {
            const band = bands.find((band) => band.name === slot.act);
            const event = events.find((event) => event.act.act === slot.act);

            if (band) {
              return {
                ...band,
                time: `${slot.start} - ${slot.end}`, //tidspunktet bandet spiller (start og slut).
                scene, //navnet på scenen
                day, //dagen hvor bandet spiller
                cancelled: event ? event.act.cancelled : false, //hvis der er en event, tjekker vi, om bandet er aflyst. Hvis ikke, er det false.
              };
            }
            return null; // Hvis band ikke findes retuner null
          })

          .filter(Boolean), //fjerner null værdier, hvis der ikke blev fundet noget band
      };
    });
    return acc;
  }, {});

  return (
    <div>
      <ProgramList bandsByScene={organizedByScene} />
    </div>
  );
}

// initialBands={bands} initialSchedule={schedule} initialEvents={events}
// console.log(bands);
// console.log(events);

//kombiner data (bands og events)
// const combinedData = bands.map((band) => {
//   const eventInfo = events.find((event) => event.act.act === band.name);

//   if (eventInfo) {
//     return {
//       ...band,
//       time: `${eventInfo.act.start} - ${eventInfo.act.end}`,
//       scene: eventInfo.scene,
//       day: eventInfo.day, // Dag
//       cancelled: eventInfo.act.cancelled, // Aflyst eller ej
//     };
//   }
//   return band;
// });
