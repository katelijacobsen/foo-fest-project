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
import { useState } from "react";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
//=================//
// constant variabel hvor vi definere indholdet når ikke noget er blevet valgt. Variablen bruger vi til at refreshe vores
// Multistep-form (f.eks. hvis brugeren er gået over de 5min i PaymentFlow).
//=================//
const defaultState = {
  step: 0,
  tickets: {
    single: 1,
    vip: 1,
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

//=================//
// Funktion ved navn handleStep med prev (previousState & formData parametre). Begge parameter skal vi bruge både i
// funktionen & sende den vider til children-komponenterne.
//=================//

const handleStep = (prev, formData) => {
  //=================//
  // Hvis formData er lige med 0 så vis vores defaultState (vores konstant ovenpå)
  //=================//

  if (formData === null) {
    return defaultState;
  }
  const step = formData.get("stepBack") ? -1 : +1;

  //=================//
  // Hvis vores previous step er lig med 0 så gå vider til det næste skridt.
  // formatér vores valg af billettr og  brug get() metoden til at få dataen med som numbers ("+" foran formData ).
  // Er det uden "+" er det en String (se i konsollen hvad type dataer vpres objekt spytter ud).
  // vi bruger spread syntaksen (...prev) så vi kan stadig få vores data med, der opdateres i baggrunden.
  //=================//

  if (prev.step === 0) {
    return {
      ...prev,
      step: prev.step + step,
      tickets: {
        single: +formData.get("singleTickets"),
        vip: +formData.get("vipTickets"),
      },
    };
  }
  if (prev.step === 1) {
    console.log(formData.get("campsite"));

    //=================//
    // Samme princip som step 0, hvor vi derudover anvender en boolean til vores greenCamping, hvis brugeren tilføjer det.
    //=================//

    return {
      ...prev,
      step: prev.step + step,
      tents: {
        twoPeople: +formData.get("twoPeople"),
        threePeople: +formData.get("threePeople"),
        greenCamping: formData.get("greenCamping") === "on" ? true : false,
      },
      campsite: formData.get("campsite"),
    };
  }

  if (prev.step === 2) {

    //=================//
    //Vi laver en liste over vores billetter med Array (statisk metode, som laver en ny liste ud fra vores data)
    // & ved at loop igennem antallet af billetter brugeren valgt i begyndelsen.
    //=================// 

    const singleGuests = Array.from(
      { length: prev.tickets.single },

      //=================//
      //giver den unikke id'er ( _ & i (i står for index)), så man kan finde dem i vores formData.
      //=================//

      (_, i) => ({
        firstName: formData.get(`single_firstName_${i}`),
        lastName: formData.get(`single_lastName_${i}`),
        email: formData.get(`single_email_${i}`),
        phonenumber: formData.get(`single_phonenumber_${i}`),
      })
    );
    const vipGuests = Array.from({ length: prev.tickets.vip }, (_, i) => ({
      firstName: formData.get(`vip_firstName_${i}`),
      lastName: formData.get(`vip_lastName_${i}`),
      email: formData.get(`vip_email_${i}`),
      phonenumber: formData.get(`vip_phonenumber_${i}`),
    }));
    return {
      ...prev,
      step: prev.step + step,
      guests: { single: singleGuests, vip: vipGuests },
    };
  }
  if (prev.step === 3) {
    return {
      ...prev,
      step: prev.step + step,
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
      step: prev.step + step,
    };
  }
};
// Deler data uden at propdril fra Page. Så kan vi for adgang til vores data.
// Opretter en standardværdier til vores indkøbskurv. Den er på 0 indtil brugeren tilføjer noget.
// Vi siger bare her at CartContext er navnet på vores kontekst. Så dataen bliver delt op tværs af vores komponenter.
export const CartContext = createContext(null);

export default function Page() {
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
  // Forskellige Hooks der bliver anvendt i vores parent-komponent, så vi også kan sende dem vider til vores children (så de kan snak med hinanden)
  // cart er vores værdi vi sender vider i vores komponenter, mens setCart er vores funktion til at opdatere vores cart-variabel.
  // Vi giver vores useState hook 'defaultCart' som standartværdi (tom kurv).
  const [cart, setCart] = useState(defaultCart);
  // Bruger useActionState-hook til at håndtere vores data-tilstand. state er vores variabel, der bliver opdateret for hver brugeren handling
  // der sker i hver komponent.
  // F.eks. har vi givet state vider til campsite. Ligesom en filmappe struktur prøver den at finde antal af billetter vi tidliger har
  // valgt, og bruger det samme antal telte-billetter brugern må bruge.
  const [state, formAction] = useActionState(handleStep, defaultState);

  console.log(state);
  return (
    //wrapper komponenter ind med useContext så det kan opdatere indkøbskurven.
    <CartContext.Provider value={[cart, setCart]}>
      <main>
        {/* Vi giver hver children komponenter en conditional rendering og sender vores cart & formAction vider */}
        <h1
          className={`${ceasarDressing.className} mx-5 mt-10 text-6xl sm:text-6xl lg:text-6xl md:text-6xl text-white`}
        >
          BILLETTER
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <section>
            {state.step === 0 && (
              <ChooseTicket cart={cart} formAction={formAction} />
            )}
            {state.step === 1 && (
              <Campsite state={state} formAction={formAction} />
            )}
            {state.step === 2 && (
              <ContactInfo
                state={state}
                tickets={state.tickets}
                formAction={formAction}
              />
            )}
            {state.step === 3 && <PaymentFlow formAction={formAction} />}
            {state.step === 4 && (
              <PaymentComfirmed
                state={state}
                startDraw={true}
              />
            )}
          </section>
          {state.step !== 4 && <Cart cart={cart} />}
        </div>
      </main>
    </CartContext.Provider>
  );
}
