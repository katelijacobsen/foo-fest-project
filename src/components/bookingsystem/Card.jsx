import CounterInput from "./CounterInput";
import { useState } from "react";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

export default function Card({ formAction, inputName, title, price, valuta, className }) {
  const [count, setCount] = useState(0);

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <div className={`${className} text-foreground`}>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="text-2xl font-bold">{price}</p>
      <p className="font-bold">{valuta}</p>
      <CounterInput name={inputName} max={10} count={count} setCount={setCount} />
    </div>
  );
}
