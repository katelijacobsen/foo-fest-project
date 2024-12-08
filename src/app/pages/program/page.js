import ProgramList from "@/components/festivalsystem/ProgramList";

export default async function Page() {
  const fetchBands = async () => {
    let response = await fetch("http://localhost:8080/bands");
    let data = await response.json();
    return data;
  };

  const fetchSchedule = async () => {
    let response = await fetch("http://localhost:8080/schedule");
    let data = await response.json();
    return data;
  };

  const fetchEvents = async () => {
    let response = await fetch("http://localhost:8080/events");
    let data = await response.json();
    return data;
  };

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
          //fjerner alle tidsrum, der er "break" (pauser). Kun bands bliver tilbage. Gør vi for at beholde relevante data (ingen pauser eller tomme felter)
          .filter((slot) => slot.act !== "break")
          //laver et nyt objekt for hvert band, hvor vi finder detaljer i andre datasæt (/bands og /events)
          .map((slot) => {
            //Vi leder i bands-listen efter et band, der matcher navnet (slot.act) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) fx hvis slot.act er "Nirvana", finder vi Nirvana i bands
            //vi bruger find for at kombinere data fra flere forskellige datasæt
            const band = bands.find((band) => band.name === slot.act);
            //tjekker om der er ekstra info i events-datasættet, som fx om bandet er aflyst.
            const event = events.find((event) => event.act.act === slot.act);

            //Kun hvis der findes et band, laves et nyt objekt med alle nødvendige oplysninger (time, scene, day, cancelled)
            if (band) {
              return {
                //kopierer al af bandets data (fx navn, genre osv.)
                ...band,
                time: `${slot.start} - ${slot.end}`, //tidspunktet bandet spiller (start og slut).
                scene, //navnet på scenen
                day, //dagen hvor bandet spiller
                cancelled: event ? event.act.cancelled : false, //hvis der er en event, tjekker vi, om bandet er aflyst. Hvis ikke, er det false.
              };
            }
            return null; // Hvis band ikke findes retuner null
          })
          //fjerner null værdier, hvis der ikke blev fundet noget band
          .filter(Boolean),
      };
    });
    return accumulator;
  }, {});

  //datastrukturen vi får ud efter ovenstående er:
  // {
  //   "Midgard": [
  //     {
  //       day: "mon",
  //       bands: [
  //         {
  //           name: "Nirvana",
  //           genre: "Grunge",
  //           time: "00:00 - 02:00",
  //           scene: "Midgard",
  //           day: "mon",
  //           cancelled: false,
  //         },
  //         ...
  //       ],
  //     },
  //     ...
  //   ],
  //   "Vanaheim": [ ... ]
  // }

  return (
    <div>
      <ProgramList bandsByScene={organizedByScene} />
    </div>
  );
}
