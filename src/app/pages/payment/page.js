import { useActionState } from "react";
import { useFormState } from "react-dom";
import Basket from "@/components/bookingsystem/Basket";
import ChooseCamping from "@/components/bookingsystem/Basket";
import PaymentComfirmed from "@/components/bookingsystem/Basket";
import PaymentComfirmed from "@/components/bookingsystem/Basket";
import Form from "@/components/bookingsystem/Form";

const defaultState = {
  step: 0,
  ticketCount: undefined,
  tentCount: undefined, 
  cart: [],
}

//funktion der håndtere at gå tilbalge til formens default.
const handleStep = (prev, formData) => {
  if (!formData) {
    return defaultState;
  }
  // Hvis man er på bestil billetter, så hvis komponenten
  if (prev.step === 0) {
    // vi bruger vores spread operator & object destructuring
    return {
      ...prev,
      step: prev.step + 1,
      ticketCount: formData.get("ticketCount"),
    };
  }
  if (prev.step === 1) {
  }
  if (prev.step === 2) {
  }
  if (prev.step === 3) {
    const foo = Array.from({length: prev.ticketCount}, (_, i) => ({
      firstName: formData.get(`firstName-${i}`),
      lastName: formData.get(`lastName-${i}`),
      email: formData.get(`email-${i}`),
      phone: formData.get(`phone-${i}`),

    }))
  }

export default function Page() {


  };

  return <main>
    <h1>BILLETTER</h1>
    {state.step === 0 && <ChooseCamping />}
    {state.step === 1 && <Campsite />}
    {state.step === 2 && <Form />}
    {state.step === 3 && <PaymentFlow />}
    {state.step === 4 && <PaymentComfirmed />}
  </main>;
}
