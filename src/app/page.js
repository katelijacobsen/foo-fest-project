import LineupListReadMore from "@/components/festivalsystem/LineupListReadMore";

export default async function Home() {
  const fetchBands = async () => {
    let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    let data = await response.json();
    return data;
  };

  const bands = await fetchBands();

  return (
    <div>
      <LineupListReadMore initialLineup={bands} />
    </div>
  );
}
