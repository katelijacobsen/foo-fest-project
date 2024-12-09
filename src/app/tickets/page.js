"use client";
import ChooseTicket from "@/components/bookingsystem/ChooseTicket";
import Campsite from "@/components/bookingsystem/Campsite";
import Form from "@/components/bookingsystem/Form";
import PaymentFlow from "@/components/bookingsystem/PaymentFlow";
import PaymentComfirmed from "@/components/bookingsystem/PaymentConfirmed";
import Basket from "@/components/bookingsystem/Basket";
import { useActionState } from "react";

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
  console.log("handleStep");

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
};

export default function Page() {
  const [state, formAction] = useActionState(handleStep, defaultState);

  return (
    <main>
      <h1 className="text-foreground text-6xl">BILLETTER</h1>
      {state.step === 0 && <ChooseTicket formAction={formAction} />}
      {state.step === 1 && <Campsite />}
      {state.step === 2 && <Form />}
      {state.step === 3 && <PaymentFlow />}
      {state.step === 4 && <PaymentComfirmed />}
    </main>
  );
}
