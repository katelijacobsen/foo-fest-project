"use client";
import ChooseTicket from "@/components/bookingsystem/ChooseTicket";
import Campsite from "@/components/bookingsystem/Campsite";
import ContactInfo from "@/components/bookingsystem/ContactInfo";
import PaymentFlow from "@/components/bookingsystem/PaymentFlow";
import PaymentComfirmed from "@/components/bookingsystem/PaymentConfirmed";
import Cart from "@/components/bookingsystem/Cart";
import { createContext, useActionState } from "react";
import { Caesar_Dressing } from "next/font/google";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

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
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  },
};

export const CartContext = createContext(null);

export default function Page() {
  const [data, setData] = useState([]);
  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impna3Ntb3VoYWxzeGV6aXl0eWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyOTU1NjEsImV4cCI6MjA0OTg3MTU2MX0.WPZoRN3URqEILGHGLXl1kdWFJCj40mQWEdPfULA1Gto";
  const url = "https://jgksmouhalsxeziytygd.supabase.co/rest/v1/personer";
  const handleStep = (prev, formData) => {
    if (formData === null) {
      return defaultState;
    }
    if (prev.step === 0) {
      return {
        ...prev,
        step: prev.step + 1,
        tickets: {
          single: +formData.get("singleTickets"),
          vip: +formData.get("vipTickets"),
        },
      };
    }
    if (prev.step === 1) {
      console.log(formData.get("campsite"));

      return {
        ...prev,
        step: prev.step + 1,
        tents: {
          twoPeople: +formData.get("twoPeople"),
          threePeople: +formData.get("threePeople"),
          greenCamping: formData.get("greenCamping"),
        },
        campsite: formData.get("campsite"),
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
      console.log("singleG", singleGuests);
      console.log("vipG", vipGuests);
      const combined = [...singleGuests, ...vipGuests];
      console.log("sammen", combined);
      setData(combined);

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
        payment: {
          number: formData.get("number"),
          name: formData.get("name"),
          expiry: formData.get("expiry"),
          cvc: formData.get("cvc"),
        },
      };
    }
    if (prev.step === 4) {
      return {
        ...prev,
        step: prev.step + 1,
      };
    }
  };
  useEffect(() => {
    console.log("useEffect bliver brugt", data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apikey,
        Prefer: "return=representation",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        return () => console.log("date kommer vel?", data);
      });
  }, [data]);

  // useState til at kunne lave en global indkøbskurv på ticket site.
  const defaultCart = {
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
  };
  const [startDraw, setStartDraw] = useState(false);
  const confirmPayment = () => {
    setStartDraw(true);
  };
  //give det ned som værdi
  const [cart, setCart] = useState(defaultCart);

  const [state, formAction] = useActionState(handleStep, defaultState);
  const formStatus = useFormStatus();

  console.log(state);
  //wrapper komponenter ind med useContext så det kan opdatere indkøbskurven
  return (
    <CartContext.Provider value={setCart}>
      <main>
        <h1 className={`${ceasarDressing.className} text-6xl sm:text-6xl lg:text-6xl md:text-6xl text-white`}>BILLETTER</h1>
        <div className="flex justify-center">
          <section>
            {state.step === 0 && <ChooseTicket formAction={formAction} />}
            {state.step === 1 && <Campsite state={state} formAction={formAction} />}
            {state.step === 2 && <ContactInfo tickets={state.tickets} formAction={formAction} />}
            {state.step === 3 && <PaymentFlow formAction={formAction} />}
            {state.step === 4 && <PaymentComfirmed state={state} formStatus={formStatus} startDraw={true} />}
          </section>
          {state.step !== 4 && <Cart cart={cart} />}
        </div>
      </main>
    </CartContext.Provider>
  );
}
