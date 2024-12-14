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

export default function Campsite({ state, formAction }) {
  const [spots, setSpots] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [twoPersonCount, setTwoPersonCount] = useState(cart.tents.twoPeople);
  const [threePersonCount, setThreePersonCount] = useState(cart.tents.threePeople);
  const [selectedCampsite, setSelectedCampsite] = useState(cart.campsite);
  const [greenCamping, setGreenCamping] = useState(cart.tents.greenCamping);
  const [countError, setCountError] = useState("");
  const [handleError, setHandleError] = useState("");

  const allowUpdate = (delta) => {
    const numPeople = state.tickets.single + state.tickets.vip;
    const numTents = twoPersonCount + threePersonCount;
    if (numTents + delta > numPeople) {
      setCountError("Kære Høvding.. kun et telt til en billet.");
      return false;
    }
    setCountError("");
    return true;
  };

  const updateTwoPersonTentCount = (count) => {
    const ok = allowUpdate(count > twoPersonCount ? +1 : -1);
    if (!ok) {
      return;
    }
    setCart((prev) => ({
      ...prev,
      tents: { ...prev.tents, twoPeople: count },
    }));
    setTwoPersonCount(count);
  };
  const updateThreePersonTentCount = (count) => {
    const ok = allowUpdate(count > threePersonCount ? +1 : -1);
    if (!ok) {
      return;
    }
    setCart((prev) => ({
      ...prev,
      tents: { ...prev.tents, threePeople: count },
    }));
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

  

  const updateGreenCamping = (e) => {
    setGreenCamping(e.target.checked);
    setCart((prev) => {
      return {
        ...prev,
        tents: {
          ...prev.tents,
          greenCamping: e.target.checked,
        },
      };
    });
  };

  const handlePrev = (formData) => {
    formData.set("campsite", selectedCampsite);
    formData.set("stepBack", true);
    formAction(formData);
  };

  const handleNext = (formData) => {
    if (!selectedCampsite) {
      setHandleError("Vælg venligst et campingområde, før du fortsætter.");
      return;
    }
    formData.set("campsite", selectedCampsite);
    formAction(formData);
  };

  useEffect(() => {
    setSpots(campingArea);
  }, []);

  return (
    <form className="inline-flex flex-col flex-1 bg-gradient-to-tl border border-gray-900 from-customBlack to-customBlack_2 p-4 m-4 rounded-md">
      <h2 className={`${ceasarDressing.className} text-3xl text-white mb-4`}>
        HVOR VIL DU CAMPE?
      </h2>
      <ul className="flex flex-wrap gap-4 flex-1 text-white">
        {spots.map((spot, i) => (
          <li
            onClick={() => updateCampsite(spot.area)}
            key={i}
            className={`${
              spot.area === selectedCampsite && "border border-green-600"
            } bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-2 rounded-md select-none cursor-pointer w-56`}
          >
            <h2 className="text-2xl font-bold">{spot.area}</h2>
            <p>{spot.available} ledige pladser</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-evenly gap-4">
        <section>
          <h4
            className={`${ceasarDressing.className} text-3xl text-white mt-8`}
            >
            LEJE AF TELTE
          </h4>
          <ul className="my-4 flex flex-col gap-6">
            <li className=" flex-col text-white flex gap-4">
              <div>
                <h3 className="font-bold">2 Personers Telt</h3>
                <p className="text-xs font-normal text-gray-300">299kr</p>
              </div>
              <CounterInput
                name="twoPeople"
                count={twoPersonCount}
                setCount={updateTwoPersonTentCount}
                />
            </li>
            <li className="flex flex-col text-white gap-4">
              <div>
                <h3>3 Personers Telt</h3>
                <p className="text-xs font-normal text-gray-300">399kr</p>
              </div>
              <CounterInput
                name="threePeople"
                max={10}
                count={threePersonCount}
                setCount={updateThreePersonTentCount}
                />
            </li>
          </ul>
                {countError && <p className="text-red-500 text-sm mt-4">{countError}</p>}
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
                name="greenCamping"
                type="checkbox"
                checked={greenCamping}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={updateGreenCamping}
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
                249kr
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-between">
        <button
          className={`${" font-bold px-8 py-2 my-8 text-xl bg-gradient-to-bl from-customPink text-white to-customOrange text-transparent hover:transform"}`}
          formAction={handlePrev}
          type="submit"
          >
          Tilbage
        </button>
        {handleError && <p className="text-red-500">{handleError}</p>}
        <button
          className={`${
            selectedCampsite
            ? " font-bold py-2  px-8 my-8 text-xl bg-gradient-to-bl from-customPink text-white to-customOrange text-transparent hover:transform"
            : "bg-gray-500 px-8 py-2 my-8 text-xl font-bold text-gray-300 cursor-not-allowed"
          }`}
          formAction={handleNext}
          type="submit"
          >
          Næste
        </button>
      </div>
    </form>
  );
}
