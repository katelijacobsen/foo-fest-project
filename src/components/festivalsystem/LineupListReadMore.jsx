"use client";
import { useState } from "react";
import Link from "next/link";

const LineupListReadMore = ({ initialLineup, artists }) => {
  const [bands, setBands] = useState(initialLineup);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="max-w-screen-lg mx-auto">
      <ul className="flex flex-wrap justify-center items-center gap-2">
        {bands.slice(0, 30).map((band, index) => (
          <Link href={`/pages/program/${band.slug}`} key={band.slug}>
            <li key={band.slug} className={index < 20 ? "text-3xl lg:text-5xl" : index < 30 ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}>
              {band.name}
            </li>
          </Link>
        ))}
      </ul>
      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "" : "Vis flere..."}</button>
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
      <button>
        <Link href="/pages/lineup">Se det fulde lineup</Link>
      </button>
    </section>
  );
};

export default LineupListReadMore;
