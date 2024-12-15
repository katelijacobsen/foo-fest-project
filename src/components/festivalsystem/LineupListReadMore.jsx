"use client";
import { useState } from "react";
import Link from "next/link";
import Headline from "../global/Headline";
import LineupRune from "@/img/svg/lineup_rune.svg";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";
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
    <section className="h-screen place-content-center max-w-screen-xl mx-auto py-6 px-4 grid">
      <div className="pb-6">
        <Headline src={LineupRune} width={45} height={45} size="text-4xl md:text-6xl" text="LINEUP" />
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-4 pt-6">
        {bands.slice(0, 15).map((band, index) => (
          <li key={band.slug} className={index < 20 ? "text-3xl lg:text-5xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 30 ? "text-2xl lg:text-3xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : "text-lg lg:text-xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105"}>
            <Link href={`/pages/program/${band.slug}`} key={band.slug}>
              {band.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className=" font-bold text-xl bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent pt-4" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "" : "Vis flere..."}
      </button>
      {isExpanded && (
        <ul className="flex flex-wrap justify-center items-center gap-4">
          {bands.slice(15, 25).map((band, index) => (
            <li key={band.slug} className={index < 50 ? "text-xl lg:text-2xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 60 ? "text-lg lg:text-xl transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : index < 70 ? "text-base lg:text-md transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105" : "text-sm lg:text-md transition ease-in-out hover:bg-gradient-to-bl hover:from-customPink hover:to-customOrange hover:bg-clip-text hover:text-transparent hover:scale-105"}>
              <Link href={`/pages/program/${band.slug}`} key={band.slug}>
                {band.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="grid place-content-center pt-8">
        <Link href="/lineup">
          <PrimaryButton aria_label_text="View more artists" color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Se det fulde lineup" />
        </Link>
      </div>
    </section>
  );
};

export default LineupListReadMore;
