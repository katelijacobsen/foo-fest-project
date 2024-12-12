"use client";
import { useState, useEffect, useContext } from "react";
import CounterInput from "./CounterInput";
import { Caesar_Dressing } from "next/font/google";
import { CartContext } from "@/app/tickets/page";

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

export default function Campsite({ tentType, formAction }) {
  const [spots, setSpots] = useState([]);
  const setCart = useContext(CartContext);
  const [twoPersonCount, setTwoPersonCount] = useState(0);
  const [threePersonCount, setThreePersonCount] = useState(0);
  const [selectedCampsite, setSelectedCampsite] = useState(undefined);

  const updateTwoPersonTentCount = (count) => {
    setCart((prev) => {
      return {
        ...prev,
        tents: {
          ...prev.tents,
          twoPeople: count,
        },
      };
    });
    setTwoPersonCount(count);
  };
  const updateThreePersonTentCount = (count) => {
    setCart((prev) => {
      return {
        ...prev,
        tents: {
          ...prev.tents,
          threePeople: count,
        },
      };
    });
    setThreePersonCount(count);
  };

  const updateCampsite = (campsite) => {
    setCart((prev) => {
      return {
        ...prev,
        campsite,
      };
    });
    setSelectedCampsite(campsite);
  };

  const handleBuy = (formData) => {
    console.log("Buy!");
    formAction(formData);
  };

  useEffect(() => {
    setSpots(campingArea);
  }, []);

  return (
    <form className="inline-flex flex-col flex-1 bg-gradient-to-tl border border-gray-900 from-customBlack to-customBlack_2 p-10 rounded-md">
      <h2 className={`${ceasarDressing.className} text-3xl text-white`}>
        HVOR VIL DU CAMPE?
      </h2>
      <ul className="flex flex-wrap gap-4 flex-1 text-white">
        {spots.map((spot, i) => (
          <li
            onClick={() => updateCampsite(spot.area)}
            key={i}
            className={`${
              spot.area === selectedCampsite && "border border-green-600"
            } bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-2 rounded-md select-none cursor-pointer`}
          >
            <h2 className="text-2xl font-bold">{spot.area}</h2>
            <p>{spot.available} ledige pladser</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-evenly gap-4">
        <section>
          <h4 className={`${ceasarDressing.className} text-3xl text-white`}>
            LEJE AF TELTE
          </h4>
          <ul className="my-4 flex flex-col gap-6">
            <li className="text-white flex gap-12">
              <div>
                <h3>2 Personers Telt</h3>
                <p>+299kr</p>
              </div>
              <CounterInput
                name="twoPeople"
                max={10}
                count={twoPersonCount}
                setCount={updateTwoPersonTentCount}
              />
            </li>
            <li className="text-white  flex gap-12">
              <div>
                <h3>3 Personers Telt</h3>
                <p>+399kr</p>
              </div>
              <CounterInput
                name="threePeople"
                max={10}
                count={threePersonCount}
                setCount={updateThreePersonTentCount}
              />
            </li>
          </ul>
        </section>
        <section>
          <h3 className={`${ceasarDressing.className} text-3xl text-white`}>
            SUPPLEMENT
          </h3>

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
              <label
                htmlFor="helper-checkbox"
                className="font-bold text-xl text-white"
              >
                Grøn Camping
              </label>
              <p
                id="helper-checkbox-text"
                className="text-xs font-normal text-gray-300"
              >
                + 249kr
              </p>
            </div>
          </div>
        </section>
      </div>
      <button className="bg-red-700" formAction={handleBuy} type="submit">
        Næste
      </button>
    </form>
  );
}
