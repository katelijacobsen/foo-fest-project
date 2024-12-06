"use client";
//Vi skal bruge useState til at kunne køre det klientens side.
import { useState } from "react";

const CounterInput = () => {
  const [count, setCount] = useState(0);

  const addQuantity = () => {
    setCount(count + 1);
  };
  const subtractQuantity = () => {
    setCount(count - 1);
  };

  console.log(count);

  return (
    <>
      <form action="">
        <label htmlFor="numberInput">
          <div className="flex item-center max-w-[8rem]">
            <button
              onClick={addQuantity}
              type="button"
              className="bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-s-lg"
            >
              +
            </button>
            <input
              value={count}
              type="text"
              max="10"
              min="0"
              required
              className="text-white text-center bg-gray-950 border-y border-gray-800 h-11 py-2.5 w-full"
            />
            <button
              onClick={subtractQuantity}
              type="button"
              className="bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-e-lg"
            >
              -
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default CounterInput;
