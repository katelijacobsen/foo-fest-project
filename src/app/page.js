import Header from "@/components/global/Header";
import LineupListReadMore from "@/components/festivalsystem/LineupListReadMore";
import Camping from "@/components/festivalsystem/CampingSection";
import Volunteer from "@/components/festivalsystem/VolunteerSection";
import Footer from "@/components/global/Footer";
import TicketsSection from "@/components/festivalsystem/TicketsSection";
import dynamic from "next/dynamic";
import TestSection from "@/components/festivalsystem/TestSection";

//lazyloading af herosection
const HeroSection = dynamic(() => import("@/components/festivalsystem/ThirdHero"));
const ProgramForCurrentDay = dynamic(() => import("@/components/festivalsystem/ProgramForCurrentDay"));

export default async function Home() {
  const fetchBands = async () => {
    let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    // let response = await fetch("http://localhost:8080/bands");
    let data = await response.json();
    return data;
  };

  // fetch datasæt med endpoint /schedule
  const fetchSchedule = async () => {
    // let response = await fetch("http://localhost:8080/schedule");
    let response = await fetch("https://spring-awesome-stream.glitch.me/schedule");
    let data = await response.json();
    return data;
  };

  const bands = await fetchBands();
  const schedule = await fetchSchedule();

  //Fået hjælp af tutorer til at merge datasæt
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
    <div>
      <Header />
      {/* <HeroSection /> */}
      <HeroSection text="FOOFEST" />
      <TicketsSection />
      <LineupListReadMore initialLineup={bands} />
      <ProgramForCurrentDay mergedArray={mergedData} days={days} />
      <TestSection />
      <Camping text="Campingdelen bliver meget mere end bare en praktisk løsning – det bliver en del af den samlede oplevelse. Her kan du bygge din egen lejr, inspireret af vikingernes livsstil. Måske pynte dit telt med vimpler, skjolde eller runer? Fællesbålene bliver samlingspunktet for historier og fællessang, hvor du kan møde andre festivalgæster og dele legender om fortidens helte." />
      <Volunteer />
      <Footer />
    </div>
  );
}
