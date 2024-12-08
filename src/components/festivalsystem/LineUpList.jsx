"use client";
import { useState } from "react";
import Link from "next/link";

const LineUpList = ({ initialLineup }) => {
  const [bands, setBands] = useState(initialLineup);

  return (
    <section className="max-w-screen-lg mx-auto">
      <ul className="flex flex-wrap justify-center items-center gap-2">
        {bands.map((band, index) => (
          <Link href={`/pages/program/${band.slug}`} key={band.slug}>
            <li key={band.slug} className={index < 13 ? "text-3xl lg:text-5xl" : index < 40 ? "text-xl lg:text-3xl" : index < 50 ? "text-lg lg:text-xl" : index < 60 ? "text-md lg:text-lg" : index < 70 ? "text-base lg:text-md" : index < 80 ? "text-sm lg:text-md" : "text-xs lg:text-sm"}>
              {band.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default LineUpList;
