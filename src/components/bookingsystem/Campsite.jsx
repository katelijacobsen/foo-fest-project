"use client";
import { useState, useEffect, useContext } from "react";
import CounterInput from "./CounterInput";
import { CartContext } from "@/app/tickets/page";
import { motion } from "framer-motion";
import { Caesar_Dressing } from "next/font/google";
import { FaLeaf } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Campsite({ state, formAction }) {
  const [spots, setSpots] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [twoPersonCount, setTwoPersonCount] = useState(0);
  const [threePersonCount, setThreePersonCount] = useState(0);
  const [selectedCampsite, setSelectedCampsite] = useState([]);
  const [greenCamping, setGreenCamping] = useState(false);
  const [countError, setCountError] = useState("");
  const [handleError, setHandleError] = useState("");
  const [spotHandler, setSpotHandler] = useState(0);

  const [data, setData] = useState([]);

  // skal bruges til når vi tilføjer loading https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
  const [isLoading, setLoading] = useState(true);
  const url = "https://spring-awesome-stream.glitch.me/available-spots";
  useEffect(() => {
    // fetch("http://localhost:8080/available-spots")
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const numPeople = state.tickets.single + state.tickets.vip;
  const allowUpdate = (delta) => {
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

  const updateCampsite = (campsite, availableSpots) => {
    console.log(campsite, "YOLO");
    console.log(availableSpots, "YOLO");
    setCart((prev) => {
      return {
        ...prev,
        campsite,
      };
    });
    setSelectedCampsite([campsite, availableSpots]);
  };

  const updateGreenCamping = (e) => {
    setGreenCamping(e.target.checked);
    setCart((prev) => {
      return {
        ...prev,
        greenCamping: e.target.checked,
      };
    });
  };

  const handleNext = (formData) => {
    if (!selectedCampsite[0]) {
      setHandleError("Vælg venligst et campingområde, før du fortsætter.");
      return;
    }
    formData.set("campsite", selectedCampsite);
    console.log("capmayte", selectedCampsite[0]);
    console.log("numAvabiel", selectedCampsite[1]);
    console.log("numPeople", numPeople);
    console.log("spotsLeft", selectedCampsite[1] - numPeople);
    const spotsLeft = selectedCampsite[1] - numPeople;
    setSpotHandler(spotsLeft);

    formAction(formData);
  };

  useEffect(() => {
    if (spotHandler === 0) return;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // apikey: apikey,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        area: selectedCampsite[0],
        available: spotHandler,
      }),
    });
  }, [spotHandler]);

  return (
    <div className="flex justify-center mx-4">
      <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className=" inline-flex flex-col flex-1 bg-gradient-to-tl border border-gray-500 bg-customBlack_5 p-4 my-4 rounded-md">
        <h2 className={`${ceasarDressing.className} text-3xl text-white mb-4`}>HVOR VIL DU CAMPE?</h2>
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="loader w-12 h-12"></div>
          </div>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 text-white">
          {data.map((spot, i) => (
            <li
              onClick={() => updateCampsite(spot.area, spot.available)}
              key={i}
              className={`${spot.available < numPeople && "bg-gray-300 text-gray-500 cursor-not-allowed hidden disabled:"}${
                spot.area === selectedCampsite && "border-4"
              } bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-2 rounded-md select-none cursor-pointer`}
              style={{
                borderImage: spot.area === selectedCampsite ? "linear-gradient(to right, #EC2783, #D82023 , #EC4D08) 1" : "none",
                borderRadius: "0.375rem",
                borderWidth: spot.area === selectedCampsite ? "2px" : "1px",
              }}
            >
              <h2 className="text-2xl font-bold">{spot.area}</h2>
              <p>{spot.available} ledige pladser</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-evenly gap-4">
          <section>
            <h4 className={`${ceasarDressing.className} text-3xl text-white mt-8`}>LEJE AF TELTE</h4>
            <ul className="my-4 inline-flex flex-col gap-6">
              <li className=" flex-row text-white flex gap-12 bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-4 rounded-md">
                <div>
                  <h3 className="font-bold text-xl">2 Personers Telt</h3>
                  <p className="text-xs font-normal text-gray-300">299kr</p>
                </div>
                <CounterInput name="twoPeople" count={twoPersonCount} setCount={updateTwoPersonTentCount} />
              </li>
              <li className="flex flex-row text-white gap-12  bg-gradient-to-tl border border-gray-900 from-customBlack_2 to-customBlack p-4 rounded-md">
                <div>
                  <h3 className="font-bold text-xl">3 Personers Telt</h3>
                  <p className="text-xs font-normal text-gray-300">399kr</p>
                </div>
                <CounterInput name="threePeople" max={10} count={threePersonCount} setCount={updateThreePersonTentCount} />
              </li>
            </ul>
            {countError && (
              <p className="text-red-500 flex items-center gap-2">
                <IoIosAlert size={36} /> {countError}
              </p>
            )}
          </section>
          <section>
            <h3 className={`${ceasarDressing.className} text-3xl text-white mb-4`}>SUPPLEMENT</h3>

            <div className="flex items-center p-4 rounded-md bg-gradient-to-tl border border-green-800 from-black to-green-900">
              <div className="flex h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  name="greenCamping"
                  type="checkbox"
                  checked={greenCamping}
                  className="w-6 h-6 bg-gray-100 border-gray-300 rounded-full focus:ring-green-500 dark:ring-offset-gray-800 focus:ring-2 checked:bg-green-600 checked:border-green-600"
                  onChange={updateGreenCamping}
                />
              </div>
              <div className="ms-2 text-sm">
                <label htmlFor="helper-checkbox" className="font-bold inline-flex gap-2 items-baseline text-xl text-white">
                  Grøn Camping <FaLeaf className="text-green-400" />
                </label>
                <p id="helper-checkbox-text" className="text-xs font-normal text-gray-300">
                  249kr
                </p>
                <p className="font-light text-sm text-gray-100 w-64">Perfekt til dig, der ønsker en mere miljøvenlig festivaloplevelse.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-end">
          {handleError && (
            <p className="text-red-500 flex items-center gap-2">
              <IoIosAlert size={36} />
              {handleError}
            </p>
          )}
          <button
            className={`${
              selectedCampsite
                ? " font-bold py-2 rounded-sm px-8 my-8 ml-auto text-xl bg-gradient-to-bl from-customPink text-white to-customOrange text-transparent hover:transform"
                : "bg-gray-500 rounded-sm px-8 py-2 my-8 text-xl ml-auto font-bold text-gray-300 cursor-not-allowed"
            }`}
            formAction={handleNext}
            type="submit"
          >
            Næste
          </button>
        </div>
      </motion.form>
    </div>
  );
}
