import LineUpList from "@/components/festivalsystem/LineUpList";
import Headline from "@/components/global/Headline";
import LineUpRune from "@/img/svg/lineup_rune.svg";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default async function Page() {
  const fetchBands = async () => {
    // let response = await fetch("http://localhost:8080/bands");
    let response = await fetch("https://spring-awesome-stream.glitch.me/bands");
    let data = await response.json();
    return data;
  };

  const bands = await fetchBands();

  return (
    <>
      <Header />
      <main className="my-24">
        <div className="max-w-screen-xl mx-auto mb-10 pl-4">
          <Headline src={LineUpRune} text="2025 LINEUP" size="text-5xl md:text-6xl" width={45} height={45} />
        </div>
        <LineUpList initialLineup={bands} />
      </main>
      <Footer />
    </>
  );
}
