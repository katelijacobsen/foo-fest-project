import { useState } from "react";
import Card from "./Card";

export default function ChooseTicket({ cart, formAction }) {
  const totalTickets = cart.tickets.single + cart.tickets.vip;

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form className="flex flex-col md:flex-row gap-4 items-center">
      <Card
        // updateTotalTickets={updateTotalTickets}
        ticketType={`single`}
        formAction={formAction}
        title="ENKEL BILLET"
        price="799"
        valuta="DKK"
      />
      <Card
        // updateTotalTickets={updateTotalTickets}
        className=""
        ticketType={`vip`}
        formAction={formAction}
        title="VIP BILLET"
        price="1299"
        valuta="DKK"
      />
      <button
        type="submit"
        formAction={formAction}
        disabled={totalTickets === 0}
        className={`p-2 ${
          totalTickets === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
        } text-white`}
      >
        Næste
      </button>
    </form>
  );
}
