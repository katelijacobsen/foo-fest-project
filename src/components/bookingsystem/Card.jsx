import CounterInput from "./CounterInput";
import { useContext, useState } from "react";
import { CartContext } from "@/app/tickets/page";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Card({
  formAction,
  ticketType,
  title,
  price,
  valuta,
  className,
  border,
}) {
  const [count, setCount] = useState(0);
  const setCart = useContext(CartContext);

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  const updateCount = (count) => {
    setCart((prev) => {
      const single = ticketType === "single" ? count : prev.tickets.single;
      const vip = ticketType === "vip" ? count : prev.tickets.vip;
      return { ...prev, tickets: { single: single, vip: vip } };
    });
    setCount(count);
  };

  return (
    <div className="relative group rounded-xl inline-block p-[1.5px] overflow-hidden w-72 m-4">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#D82023_0%,#EC2783_50%,#D82023_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#52525B_0%,#D4D4D8_50%,#52525B_100%)] group-hover:animate-none" />
      <div className="relative bg-gradient-to-tl from-customBlack to-customBlack_2 z-0 rounded-xl">
        <div
          className={`${className} flex flex-col items-center rounded-xl inline-block p-2 overflow-hidden text-center`}
        >
          <h2 className={`${ceasarDressing.className} text-5xl font-bold`}>
            {title}
          </h2>
          <div className="flex items-end justify-center m-2 ">
            <p className="text-4xl font-bold">{price}</p>
            <p className="font-bold">{valuta}</p>
          </div>
          <CounterInput
            name={ticketType === "single" ? "singleTickets" : "vipTickets"}
            max={10}
            count={count}
            setCount={updateCount}
          />
        </div>
      </div>
    </div>
  );
}
