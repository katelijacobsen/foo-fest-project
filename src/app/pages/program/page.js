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

  // Kombiner bands, schedule og events
  const organizedByScene = Object.entries(schedule).reduce((acc, [scene, days]) => {
    acc[scene] = Object.entries(days).map(([day, slots]) => {
      return {
        day,
        bands: slots
          .filter((slot) => slot.act !== "break") // Filtrer pauser
          .map((slot) => {
            const band = bands.find((b) => b.name === slot.act);
            const event = events.find((e) => e.act.act === slot.act);

            if (band) {
              return {
                ...band,
                time: `${slot.start} - ${slot.end}`, // Tid fra schedule
                scene,
                day,
                cancelled: event ? event.act.cancelled : false, // Aflyst status fra events
              };
            }
            return null; // Hvis band ikke findes
          })
          .filter(Boolean), // Fjern null-værdier
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
