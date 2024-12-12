import SecondButton from "@/components/global/buttonFolder/SecondButton";
import CounterInput from "./CounterInput";
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
      <CounterInput
        name={ticketType === "single" ? "singleTickets" : "vipTickets"}
        max={10}
        count={count}
        setCount={updateCount}
      />
      <button
        className="bg-yellow-400 m-4 p-5"
        type="submit"
        formAction={handleBuy}
      >
        Køb
      </button>
      {/* <SecondButton buttonContent={"Køb"} type="submit" formAction=""/> */}
    </div>
  );
}
