"use client";
import { useState } from "react";
import Link from "next/link";

const LineUpList = ({ initialLineup }) => {
  const [bands, setBands] = useState(initialLineup);

  return (
    <div>
      <ul className="flex flex-wrap justify-center">
        {bands.map((band, index) => {
          // Beregn fontstørrelsen dynamisk baseret på index
          const fontSize = Math.max(48 - index, 20); // Fontstørrelsen starter ved 16px og går ned til 6px
          return (
            <li
              className="w-[fit] p-1 hover:text-customOrange transition ease-in-out hover:-translate-y-1"
              key={index}
              style={{ fontSize: `${fontSize}px` }} // Brug inline styling til font-size
            >
              <Link href="#">{band.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LineUpList;
