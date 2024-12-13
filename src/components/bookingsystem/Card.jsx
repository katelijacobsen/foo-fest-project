import CounterInput from "./CounterInput";
<<<<<<< HEAD
import { useState } from "react";
import PrimaryButton from "@/components/global/buttonFolder/PrimaryButton";

export default function Card({ formAction, inputName, title, price, valuta, className }) {
=======
import { useContext, useState } from "react";
import { CartContext } from "@/app/tickets/page";

export default function Card({
  formAction,
  ticketType,
  title,
  price,
  valuta,
  className,
}) {
>>>>>>> Bookingsystem
  const [count, setCount] = useState(0);
  const setCart = useContext(CartContext);

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  const updateCount = (count) => {
    setCart((prev) => {
      const single = ticketType === 'single' ? count : prev.tickets.single;
      const vip = ticketType === 'vip' ? count : prev.tickets.vip;
      return { ...prev, tickets: { single: single, vip: vip } };
    });
    setCount(count);
  };

  return (
    <div className={`${className} text-foreground`}>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="text-2xl font-bold">{price}</p>
      <p className="font-bold">{valuta}</p>
<<<<<<< HEAD
      <CounterInput name={inputName} max={10} count={count} setCount={setCount} />
=======
      <CounterInput
        name={ticketType === "single" ? "singleTickets" : "vipTickets"}
        max={10}
        count={count}
        setCount={updateCount}
      />
      <button
         className={`m-4 p-5 ${
          count === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-yellow-400 text-black hover:bg-yellow-500"
        }`}
        type="submit"
        formAction={handleBuy}
        disabled={count === 0}
      >
        Køb
      </button>
      {/* <SecondButton buttonContent={"Køb"} type="submit" formAction=""/> */}
>>>>>>> Bookingsystem
    </div>
  );
}
