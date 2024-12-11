"use client";

import { useState, useEffect } from "react";
import CounterInput from "./CounterInput";

import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const campingArea = [
  {
    area: "Svartheim",
    spots: 400,
    available: 336,
  },
  {
    area: "Nilfheim",
    spots: 300,
    available: 0,
  },
  {
    area: "Helheim",
    spots: 100,
    available: 96,
  },
  {
    area: "Muspelheim",
    spots: 200,
    available: 175,
  },
  {
    area: "Alfheim",
    spots: 250,
    available: 81,
  },
];

export default function Campsite({ inputName }) {
  const [spots, setSpots] = useState([]);

  const [count, setCount] = useState(0);

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  useEffect(() => {
    setSpots(campingArea);
  }, []);

  return (
    <form>
      <h2 className={`${ceasarDressing.className} text-3xl text-white`}>HVOR VIL DU CAMPE?</h2>
      <ul className="flex flex-wrap gap-4 flex-1 text-white">
        {spots.map((spot, i) => (
          <li key={i} className="bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-2 rounded-md">
            <h2 className="text-2xl font-bold">{spot.area}</h2>
            <p>{spot.available} ledige pladser</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly">
        <section>
          <h4 className={`${ceasarDressing.className} text-3xl text-white`}>LEJE AF TELTE</h4>
          <ul>
            <li className="text-white">
              <h3>2 Personers Telt</h3>
              <p>+299kr</p>
              <CounterInput name={inputName} max={10} count={count} setCount={setCount} />
            </li>
          </ul>
        </section>
        <section>
          <h3 className={`${ceasarDressing.className} text-3xl text-white`}>SUPPLEMENT</h3>

          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ms-2 text-sm">
              <label htmlFor="helper-checkbox" className="font-bold text-xl text-white">
                Grøn Camping
              </label>
              <p id="helper-checkbox-text" className="text-xs font-normal text-gray-300">
                + 249kr
              </p>
            </div>
          </div>
        </section>
      </div>
      <button className="bg-red-700" formAction={handleBuy}>
        Næste
      </button>
    </form>
  );
}
