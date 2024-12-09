"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function BandCard({ name, genre, start, end, slug, day, logo, scene }) {
  const imageUrl = logo && (logo.startsWith("https://") || logo.startsWith("http://")) ? logo : `http://localhost:8080/logos/${logo}`;

  console.log(imageUrl);
  return (
    <Link href={`/band/${slug}`} key={slug}>
      {imageUrl ? <Image src={imageUrl} width={300} height={300} alt={`${name} logo`} /> : <span className="text-white">No image</span>}
      <div className="">
        <p className=" ">{genre}</p>
        <p>{scene}</p>
        <h2>{name}</h2>
        <div className="">
          <h3 className="text-xl lg:text-2xl">
            {start} - {end}
          </h3>
          <p>{day}</p>
        </div>
      </div>
    </Link>
  );
}

export default BandCard;
