import { useState } from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import Card from "./Card";

export default function ChooseTicket({ cart, formAction }) {
  const totalTickets = cart.tickets.single + cart.tickets.vip;

  const handleBuy = (e) => {
    console.log("Buy!");
    formAction(e);
  };

  return (
    <form className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}  // Start with opacity 0 and moved down
        animate={{ opacity: 1, y: 0 }}  // Fade in and move up to the original position
        transition={{ duration: 0.5 }}  // Smooth transition
      >
        <Card
          ticketType="single"
          formAction={formAction}
          title="ENKEL BILLET"
          price="799"
          valuta="DKK"
          header={`text-white`}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}  
      >
        <Card
          ticketType="vip"
          formAction={formAction}
          title="VIP BILLET"
          price="1299"
          valuta="DKK"
          border={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#141415_0%,#A82023_50%,#141415_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#52525B_0%,#D4D4DA_50%,#52525B_100%)]`}
        />
      </motion.div>

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
