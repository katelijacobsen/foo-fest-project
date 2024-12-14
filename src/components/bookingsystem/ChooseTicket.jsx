import { useState } from "react";
import Card from "./Card";

export default function ChooseTicket({ cart, formAction }) {
  const totalTickets = cart.tickets.single + cart.tickets.vip;

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
      <div className="flex flex-col items-center">
        <Card
          ticketType="single"
          formAction={formAction}
          title="ENKEL BILLET"
          price="799"
          valuta="DKK"
          
          
        />
      </div>
      <div className="flex flex-col items-center">
        <Card
          ticketType="vip"
          formAction={formAction}
          title="VIP BILLET"
          price="1299"
          valuta="DKK"
        />
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-auto">
        <button
          type="submit"
          formAction={formAction}
          disabled={totalTickets === 0}
          className={`w-full md:w-auto text-xl font-bold py-2 my-8 text-white ${
            totalTickets === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "font-bold px-8 py-2 my-8 text-xl bg-gradient-to-bl from-customPink text-white to-customOrange"
          }`}
        >
          Næste
        </button>
      </div>
    </form>
  );
}
