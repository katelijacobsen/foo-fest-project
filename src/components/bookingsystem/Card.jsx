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
  ticketType,
  title,
  price,
  valuta,
  className,
  border,
  header,
}) {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(
    ticketType === "single" ? cart.tickets.single : cart.tickets.vip
  );

  const updateCount = (count) => {
    setCart((prev) => {
      const single = ticketType === "single" ? count : prev.tickets.single;
      const vip = ticketType === "vip" ? count : prev.tickets.vip;
      return { ...prev, tickets: { single: single, vip: vip } };
    });
    setCount(count);
  };

  return (
    <div className="relative z-10 group rounded-xl inline-block p-[2px] overflow-hidden w-72 md:w-72 m-4 transition-transform hover:scale-105 shadow-lg">
      <span
        className={`${
          border || "default-class"
        } absolute inset-[-1000%] animate-[spin_7s_linear_infinite]`}
      />
      <div className="relative bg-gradient-to-tl from-customBlack to-customBlack_2 z-0 rounded-xl flex items-center justify-center">
        <div
          className={`${className} flex-col items-center rounded-xl inline-block p-2 overflow-hidden text-center`}
        >
          <h2
            className={`${ceasarDressing.className} ${
              header || "default-class"
            }  text-3xl font-bold bg-gradient-to-r from-customPink via-customRed to-customOrange bg-clip-text text-transparent animate-gradient`}
          >
            {title}
          </h2>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-row items-baseline ">
              <div>
                <p className="text-7xl font-bold ">{price}</p>
                <div className="flex items-baseline gap-2 justify-center">
                  <p className="text-gray-300 ">{valuta}</p>
                  <p className="text-gray-300 text-xs">+ Gebyr</p>
                </div>
              </div>
            </div>
            <ul className="text-xs text-left mt-2 mb-6 list-disc text-gray-400">
              <li>
                <p>
                  Adgang til festivalsområdet
                </p>
              </li>
              <li>
                <p>
                  Adgang til fælles faciliteter
                </p>
              </li>
              <li>
                <p>
                  Meet-and-greet med artister
                </p>
              </li>
            </ul>
            <CounterInput
              name={ticketType === "single" ? "singleTickets" : "vipTickets"}
              max={10}
              count={count}
              setCount={updateCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
