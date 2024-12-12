"use client";
import { useState } from "react";
import Link from "next/link";
import Headline from "../global/Headline";
import LineupRune from "@/img/svg/lineup_rune.svg";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
import PosterBackground from "@/img/poster-bg.png";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const LineupListReadMore = ({ initialLineup, artists }) => {
  const [bands, setBands] = useState(initialLineup);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="h-screen place-content-center max-w-screen-lg mx-auto py-6 px-4 grid m-64">
      <div className="">
        <Headline src={LineupRune} text="LINEUP" />
      </div>
      <div
        className="h-[140vh] opacity-90"
        style={{
          backgroundImage: `url(${PosterBackground.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "80%",
        }}
      >
        <div className="p-6">
          <h1 className={`${ceasarDressing.className} text-4xl md:text-8xl text-white text-center`}>FOO FEST</h1>
          <h2 className={`${ceasarDressing.className} text-4xl text-white text-center`}>2025</h2>
          <ul className="flex flex-wrap justify-center items-center gap-4 pt-6 text-white">
            {bands.slice(0, 40).map((band, index) => (
              <Link href={`/pages/program/${band.slug}`} key={band.slug}>
                <li key={band.slug} className={index < 20 ? "text-3xl lg:text-5xl  " : index < 30 ? "text-2xl lg:text-3xl text-white" : "text-lg lg:text-xl text-white"}>
                  {band.name}
                </li>
              </Link>
            ))}
          </ul>
          <p className="text-center font-bold mt-10">... og mange flere.</p>
        </div>
      </div>

      <div className="grid place-content-center pt-8">
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Se det fulde lineup" />
      </div>
    </section>
  );
};

export default LineupListReadMore;

{
  /* <ul className="flex flex-wrap justify-center items-center gap-4 pt-6 text-black">
{bands.slice(0, 15).map((band, index) => (
  <Link href={`/pages/program/${band.slug}`} key={band.slug}>
    <li key={band.slug} className={index < 20 ? "text-3xl lg:text-5xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 30 ? "text-2xl lg:text-3xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : "text-lg lg:text-xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105"}>
      {band.name}
    </li>
  </Link>
))}
</ul>
<button className=" font-bold text-xl bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent pt-4" onClick={() => setIsExpanded(!isExpanded)}>
{isExpanded ? "" : "Vis flere..."}
</button>
{isExpanded && (
<ul className="flex flex-wrap justify-center items-center gap-4">
  {bands.slice(15, 25).map((band, index) => (
    <Link href={`/pages/program/${band.slug}`} key={band.slug}>
      <li key={band.slug} className={index < 50 ? "text-xl lg:text-2xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 60 ? "text-lg lg:text-xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 70 ? "text-base lg:text-md transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : "text-sm lg:text-md transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105"}>
        {band.name}
      </li>
    </Link>
  ))}
</ul>
)} */
}
