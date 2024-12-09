"use client";
import { useState } from "react";
import Link from "next/link";
import Headline from "../global/Headline";
import LineupRune from "@/img/svg/lineup_rune.svg";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

const LineupListReadMore = ({ initialLineup, artists }) => {
  const [bands, setBands] = useState(initialLineup);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="max-w-screen-lg mx-auto py-6 px-4 grid">
      <div className="">
        <Headline src={LineupRune} text="LINEUP" />
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-2 pt-6">
        {bands.slice(0, 30).map((band, index) => (
          <Link href={`/pages/program/${band.slug}`} key={band.slug}>
            <li key={band.slug} className={index < 20 ? "text-3xl lg:text-5xl" : index < 30 ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}>
              {band.name}
            </li>
          </Link>
        ))}
      </ul>
      <button className=" font-bold text-xl bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "" : "Vis flere..."}
      </button>
      {isExpanded && (
        <ul className="flex flex-wrap justify-center items-center gap-2">
          {bands.slice(30, 60).map((band, index) => (
            <Link href={`/pages/program/${band.slug}`} key={band.slug}>
              <li key={band.slug} className={index < 50 ? "text-xl lg:text-2xl" : index < 60 ? "text-lg lg:text-xl" : index < 70 ? "text-base lg:text-md" : index < 80 ? "text-sm lg:text-md" : "text-xs lg:text-sm"}>
                {band.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
      <div className="grid place-content-center pt-8">
        <PrimaryButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Se det fulde lineup" />
      </div>
    </section>
  );
};

export default LineupListReadMore;
