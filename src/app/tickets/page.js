"use client";
import ChooseTicket from "@/components/bookingsystem/ChooseTicket";
import Campsite from "@/components/bookingsystem/Campsite";
import ContactInfo from "@/components/bookingsystem/ContactInfo";
import PaymentFlow from "@/components/bookingsystem/PaymentFlow";
import PaymentComfirmed from "@/components/bookingsystem/PaymentConfirmed";
import Basket from "@/components/bookingsystem/Cart";
import { useActionState } from "react";
import { Caesar_Dressing } from "next/font/google";

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
  guests: {
    single: [],
    vip: [],
  },
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
  if (prev.step === 2) {
    const singleGuests = Array.from({ length: prev.tickets.single }, (_, i) => ({
      firstName: formData.get(`single_firstName_${i}`),
      lastName: formData.get(`single_lastName_${i}`),
      email: formData.get(`single_email_${i}`),
      phonenumber: formData.get(`single_phonenumber_${i}`),
    }));
    const vipGuests = Array.from({ length: prev.tickets.vip }, (_, i) => ({
      firstName: formData.get(`vip_firstName_${i}`),
      lastName: formData.get(`vip_lastName_${i}`),
      email: formData.get(`vip_email_${i}`),
      phonenumber: formData.get(`vip_phonenumber_${i}`),
    }));
    return {
      ...prev,
      step: prev.step + 1,
      guests: { single: singleGuests, vip: vipGuests },
    };
  }
  if (prev.step === 3) {
    return {
      ...prev,
      step: prev.step + 1,
    };
  }
  if (prev.step === 4) {
    return {
      ...prev,
      step: prev.step + 1,
    };
  }
};

export default function Page() {
  const [state, formAction] = useActionState(handleStep, defaultState);

  console.log(state);
  
  return (
    <main>
      <h1 className={`${ceasarDressing.className} text-8xl text-white`}>
        BILLETTER
      </h1>
      {state.step === 0 && <ChooseTicket formAction={formAction} />}
      {state.step === 1 && (
        <Campsite formAction={formAction} tickets={state.tickets} />
      )}
      {state.step === 2 && (
        <ContactInfo tickets={state.tickets} formAction={formAction} />
      )}
      {state.step === 3 && <PaymentFlow formAction={formAction}/>}
      {state.step === 4 && <PaymentComfirmed />}
    </main>
  );
}
