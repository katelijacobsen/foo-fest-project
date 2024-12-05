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

  const bandsCombinedWithEvents = [...bands, ...events];

  return (
    <div>
      <ProgramList initialBands={bands} initialSchedule={schedule} initialEvents={events} bandsCombinedWithEvents={bandsCombinedWithEvents} />
    </div>
  );
}
