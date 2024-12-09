import LineupListReadMore from "@/components/festivalsystem/LineupListReadMore";
import ProgramForCurrentDay from "@/components/festivalsystem/ProgramForCurrentDay";

export default async function Home() {
  const fetchBands = async () => {
    // let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    let response = await fetch("http://localhost:8080/bands");
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

  const bands = await fetchBands();
  const schedule = await fetchSchedule();

  // Organiser bands efter scene og dag
  const bandsByScene = Object.entries(schedule).reduce((acc, [scene, days]) => {
    acc[scene] = Object.entries(days).map(([day, slots]) => {
      return {
        day,
        bands: slots
          .filter((slot) => slot.act !== "break") // Fjern pauser
          .map((slot) => {
            const band = bands.find((b) => b.name === slot.act);
            return band ? { ...band, time: `${slot.start} - ${slot.end}` } : null;
          })
          .filter(Boolean), // Fjern null-værdier
      };
    });
    return acc;
  }, {});

  return (
    <div>
      <ProgramForCurrentDay bandsByScene={bandsByScene} />
      <LineupListReadMore initialLineup={bands} />
    </div>
  );
}
