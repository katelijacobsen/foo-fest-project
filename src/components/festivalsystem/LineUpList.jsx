"use client";
import { useState } from "react";
import Link from "next/link";
import LineUpCard from "@/components/festivalsystem/LineUpCard";

const LineUpList = ({ initialLineup }) => {
  const [bands, setBands] = useState(initialLineup);

  return (
    <section className="max-w-screen-xl mx-auto p-2 mb-10">
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {bands.map((band, index) => (
          <li key={index}>
            <LineUpCard key={index} slug={band.slug} logo={band.logo} name={band.name} bio={band.bio} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LineUpList;

{
  /* <li key={band.slug} className={index < 13 ? "text-3xl lg:text-5xl" : index < 40 ? "text-xl lg:text-3xl" : index < 50 ? "text-lg lg:text-xl" : index < 60 ? "text-md lg:text-lg" : index < 70 ? "text-base lg:text-md" : index < 80 ? "text-sm lg:text-md" : "text-xs lg:text-sm"}>
{band.name}
</li> */
}
