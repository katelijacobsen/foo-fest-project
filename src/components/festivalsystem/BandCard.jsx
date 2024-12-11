"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function BandCard({ name, genre, start, end, slug, day, logo, scene }) {
  const imageUrl = logo && (logo.startsWith("https://") || logo.startsWith("http://")) ? logo : `http://localhost:8080/logos/${logo}`;

  console.log(imageUrl);
  return (
    <Link href={`/pages/program/${slug}`} key={slug} className="hover:scale-[1.02] transition-all duration-500 cursor-pointer min-w-72">
      <div className="relative w-full h-64">
        {imageUrl ? (
          <>
            <Image className="hover:brightness-50 transition ease-in-out duration-75 w-full h-full object-cover" src={imageUrl} width={400} height={400} alt={`${name} logo`} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <p className="text-white text-center text-3xl font-bold">{name}</p>
            </div>
          </>
        ) : (
          <span className="text-white">No image</span>
        )}
      </div>
      <div className="pt-2 px-1">
        <h2 className="font-bold text-xl bg-gradient-to-bl from-customPink to-customOrange bg-clip-text text-transparent">{name}</h2>
        {/* <div className="grid justify-items-end">
          <p className="text-sm">{scene}</p>
        </div> */}
        <p className="text-customWhite_4">{genre.toUpperCase()}</p>
        <div className="flex gap-1 items-end">
          <p className="text-md">
            {start} - {end}
          </p>
          <p>{day}</p>
        </div>
      </div>
    </Link>
  );
}

export default BandCard;
