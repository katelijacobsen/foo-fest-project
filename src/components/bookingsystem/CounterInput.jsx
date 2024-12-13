"use client";
//Vi skal bruge useState til at kunne køre det klientens side.
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const CounterInput = ({ count, setCount, max, name }) => {
  const addQuantity = () => {
    if (count === max) {
      return;
    }
    setCount(count + 1);
  };
  const subtractQuantity = () => {
    if (count - 1 < 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <label htmlFor="numberInput">
        <div className="flex item-center max-w-[8rem]">
          <button onClick={addQuantity} type="button" className="bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-s-lg">
            <FiPlus />
          </button>
          <input name={name} value={count} onChange={() => {}} type="number" required className="text-white text-center bg-gray-950 border-y border-gray-800 h-11 py-2.5 w-full" />
          <button onClick={subtractQuantity} type="button" className="bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 h-11 rounded-e-lg">
            <FiMinus />
          </button>
        </div>
      </label>
    </>
  );
};

export default CounterInput;
