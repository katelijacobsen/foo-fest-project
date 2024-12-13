import CounterInput from "./CounterInput";
import { useContext, useState } from "react";
import { CartContext } from "@/app/tickets/page";

export default function Card({ formAction, ticketType, title, price, valuta, className, setCount2 }) {
  const [count, setCount] = useState(0);
  const [countInTotal, setCountInTotal] = useState(0);
  const setCart = useContext(CartContext);

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  const updateCount = (count) => {
    console.log("counter strik", count);
    setCart((prev) => {
      const single = ticketType === "single" ? count : prev.tickets.single;
      const vip = ticketType === "vip" ? count : prev.tickets.vip;
      console.log("normal", single);
      console.log("Vip", vip);

      console.log("TOtalt", countInTotal);

      return { ...prev, tickets: { single: single, vip: vip } };
    });
    // setCount2(countInTotal);
    setCount(count);
    setCount2(count);
  };

  return (
    <div className={`${className} text-foreground`}>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="text-2xl font-bold">{price}</p>
      <p className="font-bold">{valuta}</p>
      <CounterInput name={ticketType === "single" ? "singleTickets" : "vipTickets"} max={10} count={count} setCount={updateCount} />
      {/* <button className={`m-4 p-5 ${count === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-yellow-400 text-black hover:bg-yellow-500"}`} type="submit" formAction={handleBuy} disabled={count === 0}>
        Køb
      </button> */}
      {/* <SecondButton buttonContent={"Køb"} type="submit" formAction=""/> */}
    </div>
  );
}
