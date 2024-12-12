import LineUpList from "@/components/festivalsystem/LineUpList";
import Headline from "@/components/global/Headline";
import LineUpRune from "@/img/svg/lineup_rune.svg";

export default async function Page() {
  const fetchBands = async () => {
    let response = await fetch("http://localhost:8080/bands");
    // let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    let data = await response.json();
    return data;
  };

  const bands = await fetchBands();

  return (
    <div>
      <Headline src={LineUpRune} text="LINE-UP" />
      <LineUpList initialLineup={bands} />
    </div>
  );
}
