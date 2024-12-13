"use client";
import ChooseTicket from "@/components/bookingsystem/ChooseTicket";
import Campsite from "@/components/bookingsystem/Campsite";
import Form from "@/components/bookingsystem/Form";
import PaymentFlow from "@/components/bookingsystem/PaymentFlow";
import PaymentComfirmed from "@/components/bookingsystem/PaymentConfirmed";
import Basket from "@/components/bookingsystem/Basket";
import { useActionState, useState } from "react";
import { Caesar_Dressing } from "next/font/google";

// const defaultState = {
//   step: 0,
//   ticketCount: undefined,
//   tentCount: undefined,
//   cart: [],
// }

// //funktion der håndtere at gå tilbalge til formens default.
// const handleStep = (prev, formData) => {
//   if (!formData) {
//     return defaultState;
//   }
//   // Hvis man er på bestil billetter, så hvis komponenten
//   if (prev.step === 0) {
//     // vi bruger vores spread operator & object destructuring
//     return {
//       ...prev,
//       step: prev.step + 1,
//       ticketCount: formData.get("ticketCount"),
//     };
//   }
//   if (prev.step === 1) {
//   }
//   if (prev.step === 2) {
//   }
//   if (prev.step === 3) {
//     const foo = Array.from({length: prev.ticketCount}, (_, i) => ({
//       firstName: formData.get(`firstName-${i}`),
//       lastName: formData.get(`lastName-${i}`),
//       email: formData.get(`email-${i}`),
//       phone: formData.get(`phone-${i}`),

//     }))
//   }
// }
const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const defaultState = {
  step: 0,
  tickets: {
    single: 0,
    vip: 0,
  },
  campsite: undefined,
  tents: {
    twoPeople: 0,
    threePeople: 0,
    greenCamping: false,
  },
  guests: [],
  payment: {
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvc: "",
  },
};

const handleStep = (prev, formData) => {
  if (prev.step === 0) {
    return {
      ...prev,
      step: prev.step + 1,
      tickets: {
        single: formData.get("singleTickets"),
        vip: formData.get("vipTickets"),
      },
    };
  }
  if (prev.step === 1) {
    return {
      ...prev,
      step: prev.step + 1,
      tents: {
        twoPeople: formData.get("twoPeople"),
        threPeople: formData.get("threePeople"),
        greenCamping: formData.get("greenCamping"),
      },
    };
  }
};

export default function Page() {
  const [state, formAction] = useActionState(handleStep, defaultState);
  const [normalTicketsCount, setNormalTicketsCount] = useState(0);
  const [vipTicketsCount, setVipTicketsCount] = useState(0);
  console.log("normal ticket", normalTicketsCount);
  console.log("VIP tickets", vipTicketsCount);
  return (
    <main>
      <h1 className={`${ceasarDressing.className} text-8xl text-white`}>BILLETTER</h1>
      {state.step === 0 && <ChooseTicket setNormalTicketsCount={setNormalTicketsCount} setVipTicketsCount={setVipTicketsCount} formAction={formAction} />}
      {state.step === 1 && <Campsite />}
      {state.step === 2 && <Form />}
      {state.step === 3 && <PaymentFlow />}
      {state.step === 4 && <PaymentComfirmed />}
      <p>{normalTicketsCount}</p>
      <p>{vipTicketsCount}</p>
    </main>
  );
}
